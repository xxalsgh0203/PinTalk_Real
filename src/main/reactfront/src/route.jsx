import { createBrowserRouter } from 'react-router-dom';
import App from './App';

import Home from './pages/Home';
import Investment from './pages/Investment';
import Loan from './pages/Loan';

import UserMemberDetail from './components/admin/UserDetail/UserMemberDetail';

import NotFound from './pages/NotFound';
import Login from './pages/login/Login';
import ForgotAccount from './pages/login/ForgotAccount';

import Admin from './pages/admin/Admin';
import LoginRegister from './pages/login/LoginRegister';
import AdminRegister from './pages/admin/AdminRegister';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
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
        element: <AdminRegister />,
      },
      {
        path: 'admin',
        element: <Admin />,
      },
      {
        path: 'userMemberDetail/:id',
        element: <UserMemberDetail />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'forgot-account',
        element: <ForgotAccount />,
      },
      {
        path: 'register',
        element: <LoginRegister />,
      },
    ],
  },
]);

export default router;
