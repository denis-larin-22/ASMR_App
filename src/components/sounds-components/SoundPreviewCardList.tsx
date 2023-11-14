import { connect } from "react-redux"
import { IInitState, ISoundObject } from "../../core/store/types"
import { SoundPreviewCard } from "./SoundPreviewCard"
import { addToRecentlyWatchedList, setCurrentSound } from "../../core/store/actions"
import { Dispatch } from "redux"
import { Link } from "react-router-dom"
import '../../index.css'
import { useRef } from 'react';
import { motion } from "framer-motion";

type payloadActionFunc = (value: ISoundObject) => void;

interface IProps {
    soundsList: ISoundObject[],
    setSound: payloadActionFunc,
    addToRecentlyList: payloadActionFunc
}

const SoundPreviewCardListView = ({ soundsList, setSound, addToRecentlyList }: IProps) => {

    const containerRef = useRef<HTMLDivElement>(null);

    const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        const container = containerRef.current;
        if (container) {
            container.scrollLeft += event.deltaY;
        }
    };

    const filteredSoundList = soundsList.filter(sound => sound.customPlaylist === false);
    // Animation
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { x: 20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1
        }
    };

    return (
        <div
            ref={containerRef}
            className="overflow-x-auto"
            onWheel={handleWheel}
        >
            <motion.ul
                variants={container}
                initial="hidden"
                animate="visible"
                className="my-3 flex gap-5 pr-2 max-w-sm 2xl:max-w-full"
            >
                {
                    filteredSoundList.map((sound, index) => (
                        <motion.li
                            key={index}
                            variants={item}
                            className="min-w-[160px]"
                            onMouseOver={() => setSound(sound)}
                            onClick={() => {
                                setSound(sound);
                                addToRecentlyList(sound);
                            }}
                        >
                            <Link to={'/sound'}>
                                <SoundPreviewCard
                                    title={sound.title}
                                    imagePath={sound.imageUrl}
                                />
                            </Link>
                        </motion.li>
                    ))
                }
            </motion.ul>
        </div>
    )
}

const mapState = (state: IInitState) => ({
    soundsList: state.soundsList
})

const mapDispatch = (dispatch: Dispatch) => ({
    setSound: (payload: ISoundObject) => dispatch(setCurrentSound(payload)),
    addToRecentlyList: (payload: ISoundObject) => dispatch(addToRecentlyWatchedList(payload)),
})

export const SoundPreviewCardList = connect(mapState, mapDispatch)(SoundPreviewCardListView)