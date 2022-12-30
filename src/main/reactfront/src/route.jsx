import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Register from './components/register/Register';

import Home from './pages/Home';
import Investment from './pages/Investment';
import Loan from './pages/Loan';

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
        path: 'loan/apply',
        element: <Register />,
      },
    ],
  },
]);

export default router;
