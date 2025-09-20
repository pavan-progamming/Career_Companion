import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CareerRecommendations from './pages/CareerRecommendations';
import ResumeHelper from './pages/ResumeHelper';
import InterviewPrep from './pages/InterviewPrep';
import LearningSuggestions from './pages/LearningSuggestions';
import JobTrends from './pages/JobTrends';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendations" element={<CareerRecommendations />} />
        <Route path="/resume-helper" element={<ResumeHelper />} />
        <Route path="/interview-prep" element={<InterviewPrep />} />
        <Route path="/learning" element={<LearningSuggestions />} />
        <Route path="/job-trends" element={<JobTrends />} />
      </Routes>
    </Layout>
  );
}

export default App;