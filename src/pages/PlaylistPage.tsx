import '../index.css';
import { NewCustomPlaylist, Sidebar } from '../components';
import { connect } from 'react-redux';
import { IInitState, ISoundObject } from '../core/store/types';
import { Dispatch } from 'redux';
import { createNewCustomSound } from '../core/store/actions';

interface IProps {
    soundsList: ISoundObject[],
    createNewPlaylist: (value: ISoundObject) => void
}

const PlayListPageView = ({ soundsList, createNewPlaylist }: IProps) => {

    return (
        <main className="h-screen bg-dark flex">
            <Sidebar />
            <NewCustomPlaylist soundsList={soundsList} saveHandler={createNewPlaylist} />
        </main>
    )
}

const mapState = (state: IInitState) => ({
    soundsList: state.soundsList
});

const mapDispatch = (dispatch: Dispatch) => ({
    createNewPlaylist: (newPlaylist: ISoundObject) => dispatch(createNewCustomSound(newPlaylist))
})

export const PlayListPage = connect(mapState, mapDispatch)(PlayListPageView);