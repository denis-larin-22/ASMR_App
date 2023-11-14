import '../index.css';
import { PlayerPanel, Sidebar, SoundCardMain } from '../components';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import { motion } from "framer-motion";
import { connect } from 'react-redux';
import { IInitState } from '../core/store/types';
import { Dispatch } from 'redux';
import { playNextSound, playPreviousSound } from '../core/store/actions';
import Player from '../components/player/Player';

interface IProps {
    title: string;
    imagePath: string;
    soundPath: string | string[];
    videoPath: string;
    text: string;
    setNextSound: () => void;
    setPreviousSound: () => void;
}

const SoundPageView = ({
    title,
    imagePath,
    soundPath,
    videoPath,
    text,
    setNextSound,
    setPreviousSound,
}: IProps): JSX.Element => {
    const [isVissible, setIsVissible] = useState(true);
    const [isPlayingAudio, setIsPlayingAudio] = useState(false);

    return (
        <motion.main className='relative z-0 w-screen h-screen overflow-hidden text-light bg-dark'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5, duration: 1.5 } }}
            >
                {Array.isArray(soundPath) ?
                    soundPath.map((path, index) => (
                        <Player key={index} src={path} isPlaying={isPlayingAudio} />
                    ))
                    :
                    <Player src={soundPath} isPlaying={isPlayingAudio} />
                }
                <ReactPlayer
                    url={videoPath}
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                    className='absolute left-0 -z-40 video-background'
                    style={{
                        top: isVissible ? '-50%' : '0'
                    }}
                />
            </motion.div>
            <Sidebar />
            {
                isVissible && <motion.section
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
                    className="absolute z-10 w-full h-full sound-page-gradient"
                    style={{
                        background: 'linear-gradient(360deg, #1D2123 50%, transparent 80%)',
                    }}
                >
                    <SoundCardMain
                        title={title}
                        imagePath={imagePath}
                        text={text}
                    />
                </motion.section>
            }
            <PlayerPanel
                isPlaying={isPlayingAudio}
                title={title}
                soundImagePath={imagePath}
                setVissible={() => setIsVissible(!isVissible)}
                setPlaying={() => setIsPlayingAudio(!isPlayingAudio)}
                setNextSound={() => {
                    setIsPlayingAudio(false);
                    setNextSound();
                }}
                setPreviousSound={() => {
                    setIsPlayingAudio(false);
                    setPreviousSound();
                }}
                timerHandler={() => setIsPlayingAudio(false)}
            />
        </motion.main>
    )
}

const mapState = ({ currentSound }: IInitState) => ({
    title: currentSound.title,
    imagePath: currentSound.imageUrl,
    soundPath: currentSound.audioUrl,
    videoPath: currentSound.videoUrl,
    text: currentSound.text
});

const mapDispatch = (dispatch: Dispatch) => ({
    setNextSound: () => dispatch(playNextSound()),
    setPreviousSound: () => dispatch(playPreviousSound()),
})

export const SoundPage = connect(mapState, mapDispatch)(SoundPageView);