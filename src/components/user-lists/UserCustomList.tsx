import { Link } from "react-router-dom"
import { ISoundObject } from "../../core/store/types"
import { CardSound } from "./CardSound"
import { useEffect } from 'react';

interface IProps {
    getCustomUserList: () => void,
    deleteSoundFromCustomList: (value: ISoundObject) => void,
    userCustomSoundsList: ISoundObject[] | null,
    setSound: (value: ISoundObject) => void,
}

export const UserCustomList = ({ userCustomSoundsList, getCustomUserList, deleteSoundFromCustomList, setSound }: IProps) => {

    useEffect(() => {
        getCustomUserList();
    }, [])

    return (
        <ul className="h-[200px] md:h-[500px] my-3 pt-3 pr-3 flex flex-col gap-3 overflow-y-scroll">
            {userCustomSoundsList !== null ?
                userCustomSoundsList.map((soundItem, index) => (
                    <li key={index}>
                        <CardSound
                            soundItem={soundItem}
                            setSound={setSound}
                            deleteHandler={deleteSoundFromCustomList}
                        />
                    </li>
                ))
                :
                <>
                    <p className="text-white-opacity text-m-sm text-center mt-9">no sounds created</p>
                    <Link to={'/playlist'} className="w-14 h-14 text-m-md flex items-center justify-center self-center text-white-opacity hover:text-white duration-150 border-1 rounded-full border-white-opacity hover:border-white">+</Link>
                </>
            }
        </ul>
    )
}