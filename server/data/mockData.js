// This file contains all the dummy data used by the application.
const careerRecommendations = [
  { id: 1, title: 'Frontend Developer', description: 'Build beautiful and responsive user interfaces using technologies like React, Vue, and Angular.', match: 95 },
  { id: 2, title: 'Data Scientist', description: 'Analyze complex data to find trends and make predictions. Requires skills in Python, R, and machine learning.', match: 88 },
  { id: 3, title: 'UX/UI Designer', description: 'Design intuitive and user-friendly digital products. Focuses on user research, wireframing, and prototyping.', match: 82 },
];
const resumeSuggestions = {
  improvements: [
    { type: 'Action Verbs', suggestion: 'Replace "Responsible for" with stronger action verbs like "Orchestrated", "Managed", or "Implemented".' },
    { type: 'Quantify Achievements', suggestion: 'Add numbers to your achievements. For example, "Improved performance by 15%".' },
    { type: 'Keywords', suggestion: 'Include keywords from the job description to pass through Applicant Tracking Systems (ATS).' },
  ]
};
const interviewQuestions = [
  { id: 1, question: 'Tell me about yourself.', answer: 'This is your elevator pitch. Start with your current role, briefly mention past experiences relevant to the job, and end with why you are excited about this opportunity.' },
  { id: 2, question: 'What are your biggest weaknesses?', answer: 'Choose a real weakness you are actively working on. Frame it positively. Example: "I used to struggle with public speaking, so I joined a club to build my confidence."' },
  { id: 3, question: 'Where do you see yourself in 5 years?', answer: 'Show ambition and a desire to grow with the company. Align your goals with the company\'s trajectory.' },
];
const learningResources = [
  { id: 1, title: 'FreeCodeCamp - Responsive Web Design', category: 'Web Development', type: 'Free', level: 'Beginner', link: 'https://www.freecodecamp.org/' },
  { id: 2, title: 'Coursera - Google Data Analytics', category: 'Data Science', type: 'Paid', level: 'Beginner', link: 'https://www.coursera.org/' },
  { id: 3, title: 'Udemy - The Complete Web Development Bootcamp', category: 'Web Development', type: 'Paid', level: 'Beginner', link: 'https://www.udemy.com/' },
];
const jobTrends = {
  salaryData: [
    { role: 'Frontend Dev', avgSalary: 95000 },
    { role: 'Backend Dev', avgSalary: 105000 },
    { role: 'Data Scientist', avgSalary: 120000 },
    { role: 'UX/UI Designer', avgSalary: 85000 },
  ],
  demandData: [
    { month: 'Jan', 'Frontend': 4000, 'Data Science': 2400 },
    { month: 'Feb', 'Frontend': 3000, 'Data Science': 2210 },
    { month: 'Mar', 'Frontend': 5000, 'Data Science': 2290 },
  ]
};
module.exports = { careerRecommendations, resumeSuggestions, interviewQuestions, learningResources, jobTrends };