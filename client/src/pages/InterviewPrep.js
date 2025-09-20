import React from 'react';
import { Accordion, Spinner, Alert } from 'react-bootstrap';
import useFetch from '../hooks/useFetch';
import { API_BASE_URL } from '../apiService'; // Import the base URL

const InterviewPrep = () => {
  // Construct the full URL for the hook
  const { data: questions, loading, error } = useFetch(`${API_BASE_URL}/interview`);

  return (
    <><h1 className="text-center fw-bold mb-4">Common Interview Questions</h1>{loading && (<div className="text-center py-5"><Spinner animation="border" variant="primary" /><p className="mt-2">Loading Questions...</p></div>)}{error && <Alert variant="danger">{error}</Alert>}{questions && questions.length > 0 && (<Accordion defaultActiveKey="0">{questions.map((q, index) => (<Accordion.Item eventKey={String(index)} key={q.id}><Accordion.Header>{q.question}</Accordion.Header><Accordion.Body className="text-muted">{q.answer}</Accordion.Body></Accordion.Item>))}</Accordion>)}</>
  );
};
export default InterviewPrep;