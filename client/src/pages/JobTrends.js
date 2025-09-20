import React from 'react';
import { Card, Row, Col, Spinner, Alert } from 'react-bootstrap';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useFetch from '../hooks/useFetch';
import { API_BASE_URL } from '../apiService'; // Import the base URL

const JobTrends = () => {
  // Construct the full URL for the hook
  const { data: jobData, loading, error } = useFetch(`${API_BASE_URL}/jobs`);
  return (
    <><h1 className="text-center fw-bold mb-4">Job Market Insights & Trends</h1>{loading && <div className="text-center py-5"><Spinner animation="border" variant="primary" /></div>}{error && <Alert variant="danger">{error}</Alert>}{jobData && (<Row className="g-4"><Col lg={12}><Card className="shadow-sm"><Card.Body><Card.Title>Average Salary by Role</Card.Title><ResponsiveContainer width="100%" height={300}><BarChart data={jobData.salaryData}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="role" /><YAxis /><Tooltip formatter={(value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(value)} /><Legend /><Bar dataKey="avgSalary" fill="#0d6efd" name="Average Salary" /></BarChart></ResponsiveContainer></Card.Body></Card></Col><Col lg={12}><Card className="shadow-sm"><Card.Body><Card.Title>Job Demand Over Time</Card.Title><ResponsiveContainer width="100%" height={300}><LineChart data={jobData.demandData}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis /><Tooltip /><Legend /><Line type="monotone" dataKey="Frontend" stroke="#0d6efd" activeDot={{ r: 8 }} /><Line type="monotone" dataKey="Data Science" stroke="#198754" /></LineChart></ResponsiveContainer></Card.Body></Card></Col></Row>)}</>
  );
};
export default JobTrends;