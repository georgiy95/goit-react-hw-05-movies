import { Suspense } from 'react';
import { Outlet } from 'react-router-dom'; 
import { Header, StyleNavLink } from './Layout.styled'; 
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <StyleNavLink to="/">Home</StyleNavLink>
          <StyleNavLink to="/movies">Movies</StyleNavLink>
        </nav>
      </Header>
    <Suspense fallback={<Loader />}>
        <Outlet /> 
      </Suspense>
    </>
  );
};

export default Layout;
