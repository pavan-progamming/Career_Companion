import axios from 'axios';

// The live, public base URL for your deployed backend API
export const API_BASE_URL = 'https://career-companion-server.onrender.com';

// Create an Axios instance that will use this base URL for all requests
const api = axios.create({
  baseURL: API_BASE_URL
});

// --- EXPORTED API FUNCTIONS ---

// Function to get career recommendations
export const getRecommendations = (data) => {
  return api.post('/recommendations', data);
};

// Function to get resume suggestions
export const getResumeSuggestions = (data) => {
  return api.post('/resume', data);
};