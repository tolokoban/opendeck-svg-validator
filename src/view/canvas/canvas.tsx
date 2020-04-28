import Tfw from 'tfw'
import React from "react"
import { IProjectorState } from '../../types'
import "./canvas.css"


interface TCanvasProps {
    content: string,
    projectors: Array<IProjectorState>,
    onWallClicked(wallIndex: number): void,
    onError(error: string): void
}

interface TCanvasState { }

export default class Canvas extends React.Component<TCanvasProps, TCanvasState> {
    private content = ""
    private ref = React.createRef<HTMLDivElement>()

    componentDidMount() {
        this.refresh()
    }

    componentDidUpdate() {
        this.refresh()
    }

    private refresh() {
        const content = this.props.content
        const div = this.ref.current
        if (!div) return
        if (this.content === content) return
        this.content = content
        div.innerHTML = content

        const suffixes = ["Off", "Mono", "Stereo", "Busy", "Error"]
        for (let index = 1; index < 8; index++) {
            const element = div.querySelector(`#projector${index}`)
            if (!element) {
                this.props.onError(`Missing SVG ID: #projector${index}`)
                continue
            }
            Tfw.Gesture(element).on({
                down: this.onProjectorClick.bind(this, index)
            })
            suffixes.forEach(suffix => {
                const id = `#projector${index}${suffix}`
                const element = div.querySelector(id)
                if (!element) this.props.onError(`Missing SVG ID: ${id}`)
            })
        }
        const element = div.querySelector(`#floor`)
        if (element) {
            Tfw.Gesture(element).on({
                down: this.onProjectorClick.bind(this, 0)
            })
        } else {
            this.props.onError("Missing SVG ID: #floor")
        }
        suffixes.forEach(suffix => {
            const id = `#floor${suffix}`
            const element = div.querySelector(id)
            if (!element) this.props.onError(`Missing SVG ID: ${id}`)
        })
        const images = div.querySelectorAll("image")
        if (images.length > 0) {
            this.props.onError(`Pleae avoid <image> elements. I've found ${images.length} of them.`)
        }
    }

    private onProjectorClick(index: number) {
        this.props.onWallClicked(index)
    }

    private getClasses(prefix: string, projector: IProjectorState) {
        const classes: string[] = []
        if (projector.busy) {
            classes.push(`${prefix}Busy`)
        }
        else {
            if (!projector.power) {
                classes.push(`${prefix}Off`)
            }
            else if (projector.stereo) {
                classes.push(`${prefix}Stereo`)
            }
            else {
                classes.push(`${prefix}Mono`)
            }
            if (projector.errors.length > 0 || projector.warnings.length > 0) {
                classes.push(`${prefix}Error`)
            }
        }
        return classes
    }

    render() {
        const { projectors } = this.props
        const classes = ['openDeck-view-hardwareDashboard-Canvas']
        classes.push(...this.getClasses("projector1", projectors[1]))
        classes.push(...this.getClasses("projector2", projectors[2]))
        classes.push(...this.getClasses("projector3", projectors[3]))
        classes.push(...this.getClasses("projector4", projectors[4]))
        classes.push(...this.getClasses("projector5", projectors[5]))
        classes.push(...this.getClasses("projector6", projectors[6]))
        classes.push(...this.getClasses("projector7", projectors[7]))
        classes.push(...this.getClasses("floor", projectors[0]))
        return (<div className={classes.join(" ")} ref={this.ref}></div>)
    }
}
