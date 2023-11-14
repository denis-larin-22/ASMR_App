export interface ISoundObject {
    title: string,
    imageUrl: string,
    audioUrl: string | string[],
    videoUrl: string,
    text: string,
    customPlaylist: boolean,
}

export interface IInitState {
    currentSound: ISoundObject,
    soundsList: ISoundObject[],
    recentlyList: ISoundObject[] | null,
    userCustomList: ISoundObject[] | null
}

export interface IAction {
    type: string,
    payload?: any
}