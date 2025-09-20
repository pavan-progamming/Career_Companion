import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, ListGroup, Spinner, Alert } from 'react-bootstrap';
import { getResumeSuggestions } from '../apiService'; // Refactored import

const ResumeHelper = () => {
  const [resumeText, setResumeText] = useState('');
  const [suggestions, setSuggestions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!resumeText.trim()) {
      setError('Please paste your resume text before analyzing.');
      return;
    }
    setLoading(true);
    setError('');
    setSuggestions(null);
    try {
      const response = await getResumeSuggestions({ resumeText }); // Refactored API call
      setSuggestions(response.data.improvements);
    } catch (err) {
      setError('Failed to fetch suggestions. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <><h1 className="text-center fw-bold mb-4">AI Resume & Cover Letter Assistant</h1><Row><Col md={6}><Card className="shadow-sm h-100"><Card.Body><Card.Title>Paste Your Resume Text</Card.Title><Form onSubmit={handleSubmit}><Form.Control as="textarea" rows={15} value={resumeText} onChange={(e) => setResumeText(e.target.value)} placeholder="Paste the content of your resume here..." className="mb-3" /><div className="d-grid"><Button type="submit" disabled={loading}>{loading ? <><Spinner as="span" animation="border" size="sm" /> Analyzing...</> : 'Get Suggestions'}</Button></div></Form></Card.Body></Card></Col><Col md={6} className="mt-4 mt-md-0"><Card className="shadow-sm h-100"><Card.Body><Card.Title>Improvement Suggestions</Card.Title>{loading && (<div className="text-center py-5"><Spinner animation="border" variant="primary" /></div>)}{error && <Alert variant="danger">{error}</Alert>}{suggestions ? (<ListGroup variant="flush">{suggestions.map((item, index) => (<ListGroup.Item key={index}><div className="fw-bold">{item.type}</div>{item.suggestion}</ListGroup.Item>))}</ListGroup>) : (!loading && !error && <p className="text-muted">Your AI-generated feedback will appear here.</p>)}</Card.Body></Card></Col></Row></>
  );
};
export default ResumeHelper;