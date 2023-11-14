import { createHashRouter } from 'react-router-dom';
import { MainPage, NotFound, SoundPage } from '../../pages';
import { PlayListPage } from '../../pages/PlaylistPage';

export const routes = createHashRouter([
    {
        path: '/',
        element: <MainPage />,
        errorElement: <NotFound />
    },
    {
        path: '/sound',
        element: <SoundPage />,
    },
    {
        path: '/playlist',
        element: <PlayListPage />,
    },

])