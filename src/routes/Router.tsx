import { createBrowserRouter } from 'react-router-dom';

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
        element: <div>Uncontrolled Form</div>,
      },
      {
        path: '/react-hook-form',
        element: <div>React Hook Form</div>,
      },
    ],
  },
]);

export default router;
