import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '../pages/NotFoundPage';
import ClientPage from '../pages/ClientPage';
import LoginPage from '../pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: 'client/:id', element: <ClientPage /> },
    ],
  },
]);

export default router;
