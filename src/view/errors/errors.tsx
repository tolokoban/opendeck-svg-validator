import React from "react"
import Tfw from 'tfw'

import "./errors.css"

const InputFile = Tfw.View.InputFile

interface IErrorsProps {
    className?: string[]
    errors: string[]
    onLoad(content: string): void
}
interface IErrorsState {}

export default class Errors extends React.Component<IErrorsProps, IErrorsState> {
    state = {}

    private handleClick = async (files: FileList) => {
        console.info("files=", files)
        const file = files[0]
        if (!file) return
        const content = await InputFile.readFileAsText(file)
        this.props.onLoad(content)
    }

    render() {
        const classes = [
            'view-Errors',
            ...Tfw.Converter.StringArray(this.props.className, [])
        ]

        return (<div className={classes.join(' ')}>
            <InputFile
                accept=".svg" wide={true} label="Select an SVG file"
                icon="import" onClick={this.handleClick}/>
        <div className="body thm-bg2 thm-ele-bar">
            {
                this.props.errors.map(
                    (error: string, index: number) => <div key={`error-${index}`}>{error}</div>
                )
            }
            </div>
        </div>)
    }
}
