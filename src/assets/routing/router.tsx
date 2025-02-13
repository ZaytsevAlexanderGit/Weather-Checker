// import { createBrowserRouter } from 'react-router-dom';
import { createHashRouter } from 'react-router-dom';

import { Routes } from '../../shared/config/router';
import {
  ContactsPage,
  Layout,
  MainPage,
  MapPage,
  NotFoundPage,
} from '../../pages';

export const router = createHashRouter([
  {
    path: Routes.ROOT,
    element: <Layout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: Routes.MAP, element: <MapPage /> },
      { path: Routes.CONTACTS, element: <ContactsPage /> },
      { path: Routes.NOT_FOUND, element: <NotFoundPage /> },
    ],
  },
]);
