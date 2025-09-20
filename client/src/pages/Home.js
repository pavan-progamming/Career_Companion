import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="text-center bg-light p-5 rounded-3 shadow-sm">
      <h1 className="display-4 fw-bold">Find Your Perfect Career Path</h1>
      <p className="fs-5 text-muted my-4">
        Your personalized AI-powered guide to career success.
      </p>
      <Button as={Link} to="/recommendations" variant="primary" size="lg">
        Get Started
      </Button>
    </div>
  );
};

export default Home;