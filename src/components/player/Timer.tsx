import { useState } from "react";
import { controlIcons } from "./controlIcons";
import { AnimatePresence, motion } from "framer-motion";

interface IPRops {
    timerHandler: () => void;
}

export const Timer = ({ timerHandler }: IPRops): JSX.Element => {
    const { arrowUp: upIcon, arrowDown: downIcon } = controlIcons;
    const timerVariants: number[] = [0, 0.1, 3, 5, 10, 20, 30];
    const [timeIndex, setTimeIndex] = useState(0);
    const [isVissivble, setIsVissible] = useState(true);

    const stepTimeUpHandler = () => {
        return timeIndex < timerVariants.length - 1 ? setTimeIndex(timeIndex + 1) : timeIndex;
    }

    const stepTimeDownHandler = () => {
        return timeIndex >= 1 ? setTimeIndex(timeIndex - 1) : timeIndex;
    }

    const setTimer = () => {
        const timerValue = timerVariants[timeIndex] * 60000;
        setIsVissible(false);
        setTimeout(() => {
            timerHandler();
            setIsVissible(true);
        }, timerValue)
    }

    return (

        <section className="flex flex-col-reverse sm:flex-row items-center text-m-sm text-white-opacity">
            <AnimatePresence>
                {isVissivble && timeIndex > 0 && <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mr-4 hover:text-white duration-150"
                    onClick={setTimer}
                >
                    Set timer
                </motion.button>}
            </AnimatePresence>

            {isVissivble ? <div className="hover:text-white duration-150">
                <div className="w-12 flex flex-col items-center mr-5 ">
                    <button className="" onClick={stepTimeUpHandler}>
                        {upIcon}
                    </button>
                    <p className="">{timerVariants[timeIndex]} min.</p>
                    <button className="" onClick={stepTimeDownHandler}>
                        {downIcon}
                    </button>
                </div>
            </div>
                :
                <motion.p
                    animate={{
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        repeat: Infinity,
                    }}
                >{timerVariants[timeIndex]} min.</motion.p>
            }
        </section>
    )
}