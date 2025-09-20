import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-top py-4 mt-auto">
      <Container className="text-center text-muted">
        <p>&copy; {currentYear} Personalized Career Companion.</p>
      </Container>
    </footer>
  );
};

export default Footer;