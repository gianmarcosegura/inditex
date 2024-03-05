import { createBrowserRouter } from 'react-router-dom';
import { Favorites, Main } from '../page';
import { Layout } from '../page/Layout/Layout';
import { Character } from '../page/Character';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/favorites',
        element: <Favorites />
      },
      {
        path: '/character',
        element: <Character />
      }
    ]
  }
]);
