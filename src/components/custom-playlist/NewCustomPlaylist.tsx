import { useState } from 'react';
import { ISoundObject } from '../../core/store/types';
import { motion, AnimatePresence } from 'framer-motion';

interface IProps {
    soundsList: ISoundObject[],
    saveHandler: (value: ISoundObject) => void,
}

type SoundArray = ISoundObject[] | [];
type HandleSoundClick = (
    sound: ISoundObject,
    listSoundsFrom: SoundArray,
    setFuncFrom: React.Dispatch<React.SetStateAction<SoundArray>>,
    listSoundsTo: SoundArray,
    setFuncTo: React.Dispatch<React.SetStateAction<SoundArray>>
) => void;

export const NewCustomPlaylist = ({ soundsList, saveHandler }: IProps): JSX.Element => {
    const newCollectionImg = process.env.PUBLIC_URL + '/assets/media/images/lead.png'
    //List styles
    const listStyle = "max-h-full overflow-y-auto flex flex-col gap-4 bg-dark-opacity rounded-2xl p-4 sm:p-9";
    const itemStyle = "max-w-fit text-m-md text-white-opacity hover:text-white flex items-center gap-x-6 pr-4 bg-dark-alt rounded-xl hover:bg-dark-opacity hover:translate-x-2 hover:-translate-y-1 hover:shadow-xl duration-150 cursor-pointer active:scale-95";
    const imageStyle = "w-[40px] sm:w-[75px] h-[40px] sm:h-[75px] rounded-xl";
    //Pop-up notification vissible state
    const [popUpMessage, setPopUpMessage] = useState({ vissible: false, message: '' });
    //Input value state
    const [inputValue, setInputValue] = useState('');
    //Moving sound between lists
    const newList: SoundArray = [];

    const [initSoundsList, setInitSoundsList] = useState(soundsList);
    const [userСollection, setUserСollection] = useState(newList);

    const handleSoundClick: HandleSoundClick = (
        sound,
        listSoundsFrom,
        setFuncFrom,
        listSoundsTo,
        setFuncTo
    ) => {
        const { title } = sound;
        setFuncFrom(listSoundsFrom.filter(item => item.title !== title));
        setFuncTo([...listSoundsTo, sound]);
    };
    //Save new playlist
    const saveBtnHandler = (): void => {
        const isSimilarInArray = soundsList.some(item => item.title === inputValue);

        if (isSimilarInArray) {
            setInputValue('');
            setInitSoundsList(soundsList);
            setUserСollection([]);
            setPopUpMessage({ vissible: true, message: '✖ Already created' });
            setTimeout(() => { setPopUpMessage({ vissible: false, message: '' }) }, 3000)
            return;
        }

        const newCustomPlaylist: ISoundObject = {
            title: inputValue,
            imageUrl: newCollectionImg,
            audioUrl: userСollection.map(item => item.audioUrl).flat(),
            videoUrl: `${process.env.PUBLIC_URL}/assets/media/video/custom.mp4`,
            text: userСollection.map(item => item.title).join(', '),
            customPlaylist: true,
        }

        saveHandler(newCustomPlaylist);
        setInputValue('');
        setInitSoundsList(soundsList);
        setUserСollection([]);
        setPopUpMessage({ vissible: true, message: '✔ Created' });
        setTimeout(() => { setPopUpMessage({ vissible: false, message: '' }) }, 3000)
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
            className="m-0 mt-10 lg:m-10 lg:ml-20 w-full p-5 grid grid-cols-1 md:grid-cols-2 gap-10"
        >
            <ul className={listStyle}>
                <p className="text-m-md text-white-opacity">Select sounds for your playlist</p>
                {initSoundsList.map((item, index) => {
                    if (item.customPlaylist) return null;
                    return (
                        <li
                            key={index}
                            className={itemStyle}
                            onClick={() => handleSoundClick(item, initSoundsList, setInitSoundsList, userСollection, setUserСollection)}
                        >
                            <img src={item.imageUrl} alt="sound_poster" className={imageStyle} />
                            <p>{item.title}</p>
                        </li>
                    )
                })}
            </ul>

            <ul className={listStyle}>
                <div className="relative flex items-center gap-x-5 pb-5 border-b-2 border-dark-opacity text-m-md text-white-opacity">
                    <img src={newCollectionImg} alt="new-collection" className="w-10 sm:w-16 h-10 sm:h-16" />
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder='Collection name'
                        className='max-w-xs h-10 bg-dark-alt px-3 rounded-lg'
                    />
                    {userСollection.length > 0 &&
                        inputValue.length > 0 &&
                        <button
                            className='p-3 rounded-xl bg-transparent text-white-opacity hover:text-dark hover:bg-secondary hover:shadow-btn duration-100 ease-in active:scale-90'
                            onClick={saveBtnHandler}
                        >
                            Save
                        </button>}

                    {/* Pop-up notification */}
                    <AnimatePresence>
                        {popUpMessage.vissible && <motion.div
                            className="absolute right-0 text-m-sm text-white-opacity flex items-center bg-dark-alt px-3 py-2 rounded-lg"
                            initial={{ opacity: 0, y: '-40px' }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                            exit={{ opacity: 0, y: '-40px', transition: { duration: 1 } }}
                        >
                            {popUpMessage.message}
                        </motion.div>}
                    </AnimatePresence>

                </div>
                {userСollection.map((item, index) => (
                    <li
                        key={index}
                        className={itemStyle}
                        onClick={() => handleSoundClick(item, userСollection, setUserСollection, initSoundsList, setInitSoundsList)}
                    >
                        <img src={item.imageUrl} alt="sound_poster" className={imageStyle} />
                        <p>{item.title}</p>
                    </li>
                ))}
            </ul>

        </motion.div>
    )
}