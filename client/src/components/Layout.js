import React from 'react';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';

const Layout = ({ children }) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar />
      <main className="flex-grow-1">
        <Container className="py-4">
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  );
};
export default Layout;