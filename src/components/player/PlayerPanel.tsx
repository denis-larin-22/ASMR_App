import { useState } from 'react';
import '../../index.css';
import { controlIcons } from './controlIcons';
import { motion, AnimatePresence } from "framer-motion";
import { Timer } from './Timer';

interface IProps {
    isPlaying: boolean;
    title: string,
    soundImagePath: string | undefined;
    setVissible: () => void;
    setPlaying: () => void;
    setNextSound: () => void;
    setPreviousSound: () => void;
    timerHandler: () => void
}

export const PlayerPanel = ({
    isPlaying,
    title,
    soundImagePath,
    setVissible,
    setPlaying,
    setNextSound,
    setPreviousSound,
    timerHandler,
}: IProps) => {
    const wavesImgPath = process.env.PUBLIC_URL + '/assets/media/images/waves1.png';
    const btnStyles = "p-3 rounded-[50%] bg-transparent hover:bg-secondary hover:shadow-btn duration-100 ease-in active:scale-90";
    const { back, play, pause, next, fullScreen, fold, unfold } = controlIcons;
    const [isFold, setIsFold] = useState(false);

    return (
        isFold
            ?
            <motion.button
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className='absolute bottom-5 right-1/2 z-20' onClick={() => setIsFold(!isFold)}
            >
                {unfold}
            </motion.button>
            :
            <AnimatePresence>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    layout className={`absolute z-50 ${isFold ? 'bottom-full' : 'bottom-0'} right-0 max-h-28 py-[32px] px-2 sm:px-[70px] w-screen backdrop-blur-lg border-t-1 border-slate-500 flex items-center justify-between overflow-hidden`}
                >
                    <div className="hidden sm:flex gap-x-4 items-center ">
                        <img src={soundImagePath} alt="album" className="w-12 h-12 rounded-xl" />
                        <div className="">
                            <h4 className="text-m-md pb-2">{title}</h4>
                        </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex items-center gap-x-3 sm:gap-x-10">
                        <button className={btnStyles} onClick={setPreviousSound}>
                            {back}
                        </button>
                        <button className={btnStyles} onClick={setPlaying}>
                            {isPlaying ? pause : play}
                        </button>
                        <button className={btnStyles} onClick={setNextSound}>
                            {next}
                        </button>
                        <button className={btnStyles} onClick={setVissible}>
                            {fullScreen}
                        </button>
                    </div>
                    <Timer timerHandler={timerHandler} />

                    <img src={wavesImgPath} alt="waves" className="absolute -z-10 -top-4 left-0 max-w-sm rotate-12" />
                    <button className="absolute top-2 sm:top-7 right-2 sm:right-7" onClick={() => setIsFold(!isFold)}>
                        {isFold ? unfold : fold}
                    </button>
                </motion.div>
            </AnimatePresence>
    )
}