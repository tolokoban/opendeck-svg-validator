import React from "react"
import Tfw from 'tfw'
import Canvas from '../view/canvas'
import Errors from '../view/errors'
import ProjectorState from '../view/projector-state'
import { IProjectorState } from '../types'

import "./app.css"

const Button = Tfw.View.Button

interface IAppProps {
    className?: string[]
}
interface IAppState {
    projectors: IProjectorState[],
    content: string,
    errors: string[]
}

export default class App extends React.Component<IAppProps, IAppState> {
    state = {
        projectors: [
            randomProjector(), randomProjector(), randomProjector(), randomProjector(),
            randomProjector(), randomProjector(), randomProjector(), randomProjector()
        ],
        content: "",
        errors: []
    }

    handleWallClicked = (index: number) => {
        const projectors = this.state.projectors.slice()
        const projector = { ...projectors[index] }
        if (!projector.power) {
            projector.power = true
        }
        else {
            projector.stereo = !projector.stereo
        }
        projectors[index] = projector
        this.setState({ projectors })
    }

    handleNewError = (error: string) => {
        const errors: string[] = this.state.errors.slice()
        errors.push(error)
        this.setState({ errors })
    }

    updateProjector(projector: IProjectorState, index: number) {
        console.info("projector, index=", projector, index)
        const projectors = this.state.projectors.slice()
        projectors[index] = { ...projector }
        this.setState({ projectors })
    }

    render() {
        const { projectors, content, errors } = this.state
        const classes = [
            'App', 'thm-bg0',
            ...Tfw.Converter.StringArray(this.props.className, [])
        ]

        return (<div className={classes.join(' ')}>
            <div>
                <div className="projectors">
                {
                    [
                        "floor", "projector 1", "projector 1", "projector 3",
                        "projector 4", "projector 5", "projector 6", "projector 7"
                    ].map((name: string, index: number) =>
                        <ProjectorState
                            key={`proj-${index}`}
                            label={name} projector={projectors[index]}
                            onChange={(projector) => this.updateProjector(projector, index)} />
                    )
                }
                </div>
                <Canvas
                    content={content}
                    projectors={projectors}
                    onError={this.handleNewError}
                    onWallClicked={this.handleWallClicked} />
            </div>
            <Errors errors={errors} onLoad={content => this.setState({ content, errors: [] })}/>
        </div>)
    }
}

function randomProjector(): IProjectorState {
    return {
        busy: rnd(),
        errors: [],
        name: "proj",
        power: rnd(),
        serverError: "",
        stereo: rnd(),
        warnings: []
    }
}

function rnd(): boolean {
    return Math.random() < 0.5
}
