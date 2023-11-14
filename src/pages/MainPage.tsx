import '../index.css';
import { SoundPreviewCardList, MainBanner, Greetings, Sidebar } from '../components';
import ReactPlayer from 'react-player';
import { connect } from "react-redux";
import { IInitState, ISoundObject } from '../core/store/types';
import { Dispatch } from 'redux';
import { deleteCustomSound, deleteFromRecentlyWatchedList, getRecentlyWatchedList, getUserCustomSoundList, setCurrentSound } from '../core/store/actions';
import { UserLists } from '../components/user-lists/UserLists';
import { motion } from "framer-motion";


interface IProps {
    videoPath: string | undefined,
    soundsList: ISoundObject[],
    userCustomSoundsList: ISoundObject[] | null,
    recentlyWatchedList: ISoundObject[] | null,
    getCustomUserList: () => void,
    deleteSoundFromCustomList: (value: ISoundObject) => void,
    getRecentlyList: () => void,
    deleteSoundFromRecentlyList: (value: ISoundObject) => void,
    setSound: (value: ISoundObject) => void,
}

const MainPageView = ({ videoPath, soundsList, userCustomSoundsList, recentlyWatchedList, getCustomUserList, deleteSoundFromCustomList, getRecentlyList, deleteSoundFromRecentlyList, setSound }: IProps): JSX.Element => {

    return (
        <motion.main
            className='relative z-0 bg-dark w-screen h-screen overflow-hidden text-light'
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5, duration: 1.5 } }}
            >
                <ReactPlayer
                    url={videoPath}
                    playing
                    loop
                    muted
                    width="100%"
                    height="100%"
                    className='absolute -top-2/4 left-0 -z-10 video-background'
                />
            </motion.div>


            <section className="absolute z-10 w-full main-page-gradient">
                <Sidebar />
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
                    className="h-screen ml-0 lg:ml-20 p-5 flex flex-col lg:justify-between gap-8"
                >
                    <Greetings />
                    <div className="flex flex-col md:flex-row gap-7 md:items-end justify-between">
                        <div className="max-w-[1250px] flex flex-col gap-8 justify-between">
                            <MainBanner />
                            <SoundPreviewCardList />
                        </div>
                        <UserLists
                            soundsList={soundsList}
                            userCustomSoundsList={userCustomSoundsList}
                            recentlyWatchedList={recentlyWatchedList}
                            deleteSoundFromCustomList={deleteSoundFromCustomList}
                            getCustomUserList={getCustomUserList}
                            getRecentlyList={getRecentlyList}
                            deleteSoundFromRecentlyList={deleteSoundFromRecentlyList}
                            setSound={setSound}
                        />
                    </div>
                </motion.div>
            </section>
        </motion.main >
    )
}

const mapState = (state: IInitState) => ({
    videoPath: state.currentSound?.videoUrl,
    soundsList: state.soundsList,
    userCustomSoundsList: state.userCustomList,
    recentlyWatchedList: state.recentlyList,
});

const mapDispatch = (dispatch: Dispatch) => ({
    getCustomUserList: () => dispatch(getUserCustomSoundList()),
    deleteSoundFromCustomList: (sound: ISoundObject) => dispatch(deleteCustomSound(sound)),
    getRecentlyList: () => dispatch(getRecentlyWatchedList()),
    deleteSoundFromRecentlyList: (sound: ISoundObject) => dispatch(deleteFromRecentlyWatchedList(sound)),
    setSound: (payload: ISoundObject) => dispatch(setCurrentSound(payload)),
})

export const MainPage = connect(mapState, mapDispatch)(MainPageView)