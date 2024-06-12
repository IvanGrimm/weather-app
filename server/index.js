// Load environment variables from .env file
require('dotenv').config();
// Import required modules
const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import cors middleware

const app = express();
const PORT = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

// Use cors middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Route to fetch weather data
app.get('/weather', async (req, res) => {
    try {
        // Extract city from query parameter
        const city = req.query.city;
        // Construct URL for weather API request
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        
        // Fetch weather data from OpenWeatherMap API
        const response = await axios.get(url);
        const weatherData = response.data;

        // Send weather data as JSON response
        res.json(weatherData);
    } catch (error) {
        // Handle errors if weather data fetching fails
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});