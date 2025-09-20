const express = require('express');
const cors = require('cors');
const mockData = require('./data/mockData');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// API Routes
app.post('/api/recommendations', (req, res) => {
    setTimeout(() => res.json(mockData.careerRecommendations), 1000);
});
app.post('/api/resume', (req, res) => {
    setTimeout(() => res.json(mockData.resumeSuggestions), 1500);
});
app.get('/api/interview', (req, res) => {
    res.json(mockData.interviewQuestions);
});
app.get('/api/learning', (req, res) => {
    res.json(mockData.learningResources);
});
app.get('/api/jobs', (req, res) => {
    res.json(mockData.jobTrends);
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});