import React from 'react';
import { Card, Button, Row, Col, Badge, ButtonGroup, Spinner, Alert } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import { API_BASE_URL } from '../apiService'; // Import the base URL

const LearningSuggestions = () => {
  const [filter, setFilter] = React.useState('All');
  // Construct the full URL for the hook
  const { data: resources, loading, error } = useFetch(`${API_BASE_URL}/learning`);
  const filteredResources = resources ? resources.filter(r => filter === 'All' || r.type === filter) : [];

  return (
    <><div className="text-center"><h1 className="fw-bold mb-2">Learning & Upskilling Resources</h1><p className="text-muted mb-4">Curated resources to help you grow.</p><ButtonGroup className="mb-5"><Button variant={filter === 'All' ? 'primary' : 'outline-primary'} onClick={() => setFilter('All')}>All</Button><Button variant={filter === 'Free' ? 'primary' : 'outline-primary'} onClick={() => setFilter('Free')}>Free</Button><Button variant={filter === 'Paid' ? 'primary' : 'outline-primary'} onClick={() => setFilter('Paid')}>Paid</Button></ButtonGroup></div>{loading && <div className="text-center py-5"><Spinner animation="border" variant="primary" /></div>}{error && <Alert variant="danger">{error}</Alert>}<Row xs={1} md={2} lg={3} className="g-4">{filteredResources.map(resource => (<Col key={resource.id}><Card className="h-100 shadow-sm"><Card.Body className="d-flex flex-column"><div><Badge bg={resource.type === 'Free' ? 'success' : 'info'}>{resource.type}</Badge></div><Card.Title className="mt-2">{resource.title}</Card.Title><Card.Subtitle className="mb-2 text-muted">{resource.category} - {resource.level}</Card.Subtitle><Button href={resource.link} target="_blank" variant="link" className="p-0 mt-auto align-self-start">Go to Resource &rarr;</Button></Card.Body></Card></Col>))}</Row></>
  );
};
export default LearningSuggestions;