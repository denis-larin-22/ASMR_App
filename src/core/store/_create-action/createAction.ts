export interface IActionCreator {
    (): { type: string };
    TYPE: string;
}

export interface IActionPayloadCreator<T = string> {
    (payload: any): { type: T; payload: any };
    TYPE: T;
}

export function createAction(type: string): IActionCreator {
    const actionCreator: IActionCreator = () => ({ type });
    actionCreator.TYPE = type;

    return actionCreator;
}


export function createPayloadAction<T = string>(type: T): IActionPayloadCreator<T> {
    const actionCreator: IActionPayloadCreator<T> = (payload) => ({ type, payload });
    actionCreator.TYPE = type;

    return actionCreator;
}