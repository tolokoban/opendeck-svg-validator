export interface IProjectorState extends IDeviceState {
    name: string,
    stereo: boolean,
    errors: string[],
    warnings: string[]
}

export interface IDeviceState {
    // Power is ON or OFF. Any other value should result in
    // busy=true or in any serverError.
    power: boolean,
    busy: boolean,
    // If error is an empty string, there is no error.
    serverError: string
}
