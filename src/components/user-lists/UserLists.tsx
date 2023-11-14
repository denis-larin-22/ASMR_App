import { useState } from "react"
import { ISoundObject } from "../../core/store/types"
import { UserCustomList } from "./UserCustomList"
import { UserRecentlyWatchedList } from "./UserRecentlyWatchedList"

interface IProps {
    soundsList: ISoundObject[],
    userCustomSoundsList: ISoundObject[] | null,
    recentlyWatchedList: ISoundObject[] | null,
    getCustomUserList: () => void,
    deleteSoundFromCustomList: (value: ISoundObject) => void,
    getRecentlyList: () => void,
    deleteSoundFromRecentlyList: (value: ISoundObject) => void,
    setSound: (value: ISoundObject) => void,
}

export const UserLists = ({ soundsList, userCustomSoundsList, recentlyWatchedList, getCustomUserList, deleteSoundFromCustomList, getRecentlyList, deleteSoundFromRecentlyList, setSound }: IProps) => {
    const [toggleList, setToggleList] = useState(true);
    const buttonStyles = 'px-4 py-2 mr-2 border-1 border-white-opacity rounded-full hover:bg-secondary hover:text-dark hover:border-secondary duration-250 active:scale-95';
    const buttonActiveStyle = 'bg-secondary text-dark border-secondary';

    return (
        <section className="w-full md:w-[500px] text-center text-m-sm text-white-opacity">
            <button className={`${buttonStyles} ${toggleList && buttonActiveStyle}`} onClick={() => setToggleList(true)}>My sounds</button>
            <button className={`${buttonStyles} ${toggleList || buttonActiveStyle}`} onClick={() => setToggleList(false)}>Recently watched</button>

            {toggleList ?
                <UserCustomList
                    getCustomUserList={getCustomUserList}
                    deleteSoundFromCustomList={deleteSoundFromCustomList}
                    userCustomSoundsList={userCustomSoundsList}
                    setSound={setSound}
                />
                :
                <UserRecentlyWatchedList
                    recentlyWatchedList={recentlyWatchedList}
                    getRecentlyList={getRecentlyList}
                    deleteSoundFromRecentlyList={deleteSoundFromRecentlyList}
                    setSound={setSound}
                />}
        </section>
    )
}