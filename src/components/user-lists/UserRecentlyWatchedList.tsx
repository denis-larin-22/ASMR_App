import { useEffect } from "react";
import { ISoundObject } from "../../core/store/types";
import { CardSound } from "./CardSound"
import { Link } from "react-router-dom";

interface IProps {
    recentlyWatchedList: ISoundObject[] | null,
    getRecentlyList: () => void,
    deleteSoundFromRecentlyList: (value: ISoundObject) => void,
    setSound: (value: ISoundObject) => void,
}

export const UserRecentlyWatchedList = ({ recentlyWatchedList, getRecentlyList, deleteSoundFromRecentlyList, setSound }: IProps) => {
    useEffect(() => {
        getRecentlyList();
    }, [])

    return (
        <ul className="h-[200px] md:h-[500px] my-3 pt-3 pr-3 flex flex-col gap-3 overflow-y-scroll">
            {recentlyWatchedList !== null ?
                recentlyWatchedList.map((soundItem, index) => (
                    <li key={index} className="" onClick={() => setSound(soundItem)}>
                        <CardSound
                            soundItem={soundItem}
                            setSound={setSound}
                            deleteHandler={deleteSoundFromRecentlyList}
                        />
                    </li>
                ))
                :
                <p className="text-white-opacity text-m-sm text-center mt-9">no recently watched</p>
            }
        </ul>
    )
}