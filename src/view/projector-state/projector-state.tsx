import React from "react"
import Tfw from 'tfw'

import { IProjectorState } from "../../types"


import "./projector-state.css"

const Checkbox = Tfw.View.Checkbox
//const _ = Tfw.Intl.make(require("./projector-state.yaml"))

interface IProjectorStateProps {
    className?: string[]
    label: string
    projector: IProjectorState
    onChange(projector: IProjectorState): void
}
interface IProjectorStateState {}

export default class ProjectorState extends React.Component<IProjectorStateProps, IProjectorStateState> {
    state = {}

    swap(attributeName: keyof IProjectorState, value: boolean) {
        const projector = {
            ...this.props.projector,
            [attributeName]: value
        }
        this.setState({ projector })
        this.props.onChange(projector)
    }

    render() {
        const { label, projector } = this.props
        const classes = [
            'view-ProjectorState', 'thm-bg2', 'thm-ele-button',
            ...Tfw.Converter.StringArray(this.props.className, [])
        ]

        return (<div className={classes.join(' ')}>
            <label>{label}</label>
            <Checkbox label="Busy" value={projector.busy} onChange={value => this.swap("busy", value)}/>
            <Checkbox label="Power" value={projector.power} onChange={value => this.swap("power", value)}/>
            <Checkbox label="3D" value={projector.stereo} onChange={value => this.swap("stereo", value)}/>
        </div>)
    }
}
