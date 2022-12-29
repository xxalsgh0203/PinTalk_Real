import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Investment from './pages/Investment';
import Loan from './pages/Loan';
import LoanApply from './pages/LoanApply';

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
        element: <LoanApply />,
      },
    ],
  },
]);

export default router;
