import { Link } from "react-router-dom";
import { ISoundObject } from "../../core/store/types";

export const CardSound = ({ soundItem, setSound, deleteHandler }: { soundItem: ISoundObject, setSound: (value: ISoundObject) => void, deleteHandler: (value: ISoundObject) => void }) => {
    if (soundItem === null) return null;

    const { imageUrl, title } = soundItem;

    return (
        <section className="flex items-center justify-between p-4 bg-dark-alt  rounded-xl hover:bg-dark hover:translate-x-2 hover:-translate-y-1 hover:shadow-xl duration-150">
            <div className="flex items-center gap-x-4">
                <img src={imageUrl} alt="pictures" className="w-[63px] h-[63px] rounded-lg" />
                <h4 className="text-m-sm pb-2">{title}</h4>
            </div>
            <div className="flex gap-2 sm:gap-6">
                <Link to={'/sound'} onClick={() => setSound(soundItem)} className="w-8 sm:w-10 h-8 sm:h-10 hover:scale-110 active:scale-95 duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" fill="rgba(255, 255, 255, 0.2)" /></svg>
                </Link>
                <button onClick={() => deleteHandler(soundItem)} className="w-8 sm:w-10 h-8 sm:h-10 hover:scale-110 active:scale-95 duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" fill="rgba(255, 255, 255, 0.2)" /></svg>
                </button>
            </div>
        </section>
    )
}