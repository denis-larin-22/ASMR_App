import { createAction, createPayloadAction } from "./_create-action/createAction";

export const setCurrentSound = createPayloadAction("SET_CURRENT_SOUND");

export const playNextSound = createAction('PLAY_NEXT');
export const playPreviousSound = createAction('PLAY_PREVIOUS');

export const getUserCustomSoundList = createAction('GET_USER_CUSTOM_SOUND_LIST');
export const createNewCustomSound = createPayloadAction('CREATE_NEW_PLAYLIST');
export const deleteCustomSound = createPayloadAction('DELETE_CUSTOM_SOUND');

export const getRecentlyWatchedList = createAction('GET_RECENTLY_WATCHED_LIST');
export const addToRecentlyWatchedList = createPayloadAction('ADD_TO_RECENTLY_WATCHED_LIST');
export const deleteFromRecentlyWatchedList = createPayloadAction('DELETE_FROM_RECENTLY_WATCHED_LIST');
