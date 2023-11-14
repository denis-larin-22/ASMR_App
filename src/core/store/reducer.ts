import { addToRecentlyWatchedList, createNewCustomSound, deleteCustomSound, deleteFromRecentlyWatchedList, getRecentlyWatchedList, getUserCustomSoundList, playNextSound, playPreviousSound, setCurrentSound } from "./actions";
import { initState } from "./initState";
import { IAction, IInitState, ISoundObject, } from "./types";

const LS_CUSTOM_USER_LIST = 'custom_user_sound_list';
const LS_RECENTLY_KEY = 'recently_watched_sound_list';

const workWithLocalStorage = {
    getFromLS: (key: string): ISoundObject[] | null => {
        const response = localStorage.getItem(key);
        if (response !== null) {
            const result = JSON.parse(response);
            return result.length !== 0 ? result : null;
        }
        return null;
    },

    setToLS: (key: string, soundItem: ISoundObject, recentlyList: ISoundObject[] | null) => {
        let updatedRecentlyList = [];

        if (recentlyList) {
            const isItemInList = recentlyList.some(item => item.title === soundItem.title);

            if (isItemInList) {
                updatedRecentlyList = recentlyList;
            } else {
                updatedRecentlyList = [...recentlyList, soundItem];
            }
        } else {
            updatedRecentlyList = [soundItem];
        }
        localStorage.setItem(key, JSON.stringify(updatedRecentlyList));

        return updatedRecentlyList;
    },

    deleteFromLS: (key: string, soundItem: ISoundObject) => {
        const response = localStorage.getItem(key);
        if (response === null) return null;

        const result = JSON.parse(response).filter((item: ISoundObject) => item.title !== soundItem.title);
        localStorage.setItem(key, JSON.stringify(result));

        if (result.length !== 0) {
            return result;
        }
        return null;
    }
}

export const reducer = (state: IInitState = initState, action: IAction): IInitState => {
    const { currentSound, soundsList, recentlyList, userCustomList } = state;
    // Switch to next/previous sound
    const currentSoundObjectIndex = soundsList.indexOf(currentSound);

    switch (action.type) {
        case setCurrentSound.TYPE:
            return {
                ...state,
                currentSound: action.payload,
            }

        case playNextSound.TYPE:
            const nextIndex = (currentSoundObjectIndex + 1) % soundsList.length;
            return {
                ...state,
                currentSound: soundsList[nextIndex],
            }

        case playPreviousSound.TYPE:
            const previousIndex = (currentSoundObjectIndex - 1 + soundsList.length) % soundsList.length;
            return {
                ...state,
                currentSound: soundsList[previousIndex],
            }

        case getUserCustomSoundList.TYPE:
            const customListResult = workWithLocalStorage.getFromLS(LS_CUSTOM_USER_LIST);

            return {
                ...state,
                userCustomList: customListResult,
            }

        case createNewCustomSound.TYPE:
            const customListAfterCreating = workWithLocalStorage.setToLS(LS_CUSTOM_USER_LIST, action.payload, userCustomList);

            return {
                ...state,
                userCustomList: customListAfterCreating
            }

        case deleteCustomSound.TYPE:
            const customListAfterDeleting = workWithLocalStorage.deleteFromLS(LS_CUSTOM_USER_LIST, action.payload);

            return {
                ...state,
                userCustomList: customListAfterDeleting
            }

        case getRecentlyWatchedList.TYPE:
            const recentlyListResult = workWithLocalStorage.getFromLS(LS_RECENTLY_KEY);

            return {
                ...state,
                recentlyList: recentlyListResult
            }

        case addToRecentlyWatchedList.TYPE:
            const recentlyListAfterCreating = workWithLocalStorage.setToLS(LS_RECENTLY_KEY, action.payload, recentlyList);

            return {
                ...state,
                recentlyList: recentlyListAfterCreating
            }

        case deleteFromRecentlyWatchedList.TYPE:
            const recentlyListAfterDeleting = workWithLocalStorage.deleteFromLS(LS_RECENTLY_KEY, action.payload);

            return {
                ...state,
                recentlyList: recentlyListAfterDeleting
            }

        default:
            return state;
    }
}