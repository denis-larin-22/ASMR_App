import React, { useEffect, useRef } from 'react';

interface PlayerProps {
    src: string;
    isPlaying: boolean;
}

const Player: React.FC<PlayerProps> = ({ src, isPlaying }) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        !isPlaying ? audioRef.current?.pause() : audioRef.current?.play();
    }, [isPlaying]);

    return (
        <audio ref={audioRef} loop src={src} />
    );
};

export default Player;
