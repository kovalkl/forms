import { createBrowserRouter } from 'react-router-dom';

import ReactHookForm from '@/components/reactHookForm/ReactHookForm';
import UncontrolledForm from '@/components/uncontrolledForm/UncontrolledForm';
import Root from '@/routes/Root';
import NotFound from '@/views/notFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/uncontrolled-form',
        element: <UncontrolledForm />,
      },
      {
        path: '/react-hook-form',
        element: <ReactHookForm />,
      },
    ],
  },
]);

export default router;
