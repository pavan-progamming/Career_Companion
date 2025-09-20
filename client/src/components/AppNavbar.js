import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-4 text-primary">
          Career<span className="text-dark">Companion</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/recommendations">Recommendations</Nav.Link>
            <Nav.Link as={NavLink} to="/resume-helper">Resume Helper</Nav.Link>
            <Nav.Link as={NavLink} to="/interview-prep">Interview Prep</Nav.Link>
            <Nav.Link as={NavLink} to="/learning">Learning</Nav.Link>
            <Nav.Link as={NavLink} to="/job-trends">Job Trends</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default AppNavbar;