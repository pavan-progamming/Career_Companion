import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { getRecommendations } from '../apiService'; // Refactored import

const CareerCard = ({ title, description, match }) => {
  const getBadgeVariant = () => match >= 90 ? 'success' : match >= 80 ? 'primary' : 'warning';
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="mb-0">{title}</Card.Title>
          <span className={`badge rounded-pill bg-${getBadgeVariant()}`}>{match}% Match</span>
        </div>
        <Card.Text className="text-muted">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

const CareerRecommendations = () => {
  const [skills, setSkills] = useState('');
  const [interests, setInterests] = useState('');
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!skills || !interests) {
      setError('Please fill in both skills and interests.');
      return;
    }
    setLoading(true);
    setError('');
    setRecommendations(null);
    try {
      const response = await getRecommendations({ skills, interests }); // Refactored API call
      setRecommendations(response.data);
    } catch (err) {
      setError('Failed to fetch recommendations. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-center fw-bold mb-4">Personalized Career Recommendations</h1>
      <Card className="shadow-sm mb-5"><Card.Body className="p-4"><Form onSubmit={handleSubmit}><Form.Group className="mb-3" controlId="skills"><Form.Label>Your Skills</Form.Label><Form.Control type="text" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="e.g., JavaScript, Python, Design" /></Form.Group><Form.Group className="mb-3" controlId="interests"><Form.Label>Your Interests</Form.Label><Form.Control type="text" value={interests} onChange={(e) => setInterests(e.target.value)} placeholder="e.g., Technology, Healthcare, Art" /></Form.Group><div className="d-grid"><Button variant="primary" type="submit" disabled={loading}>{loading ? <><Spinner as="span" animation="border" size="sm" /> Analyzing...</> : 'Get Recommendations'}</Button></div></Form></Card.Body></Card>
      {error && <Alert variant="danger">{error}</Alert>}
      {recommendations && (<div><h2 className="fw-bold mb-4">Top Matches for You:</h2><Row xs={1} md={2} className="g-4">{recommendations.map(rec => (<Col key={rec.id}><CareerCard {...rec} /></Col>))}</Row></div>)}
    </>
  );
};
export default CareerRecommendations;