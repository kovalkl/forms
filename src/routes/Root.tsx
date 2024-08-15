import { Outlet } from 'react-router-dom';

import Header from '@/components/header/Header';

const Root = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
