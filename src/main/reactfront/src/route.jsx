import { createBrowserRouter } from 'react-router-dom';
import App from './App';

import Home from './pages/Home';
import Investment from './pages/Investment';
import Loan from './pages/Loan';
import Admin from './pages/Admin';
import UserMemberDetail from './components/admin/UserDetail/UserMemberDetail';
import RegisterForm from './components/admin/RegisterForm';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'investment',
        element: <Investment />,
      },
      {
        path: 'loan',
        element: <Loan />,
      },
      {
        path: 'admin/insertUser',
        element: <RegisterForm />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
      {
        path: 'userMemberDetail/:id',
        element: <UserMemberDetail />,
      },
    ],
  },
]);

export default router;
