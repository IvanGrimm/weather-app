<template>
  <div>
    <!-- Title -->
    <h1>Weather App</h1>
    <!-- Input field for city name -->
    <input
      type="text"
      v-model="city"
      placeholder="Enter city name"
      @keydown.enter="handleKeyDown"
    />
    <!-- Button to fetch weather data -->
    <button @click="fetchWeather">Get Weather</button>
    <!-- Loading indicator -->
    <div v-if="loading">Loading...</div>
    <!-- Error message -->
    <div v-if="error" class="error">{{ error }}</div>
    <!-- Weather information -->
    <div v-if="weatherData" class="weather-info">
      <!-- Display city name -->
      <h2>{{ weatherData.name }}</h2>
      <!-- Display temperature -->
      <p>Temperature: {{ (weatherData.main.temp - 273.15).toFixed(2) }} °C</p>
      <!-- Display weather description -->
      <p>Description: {{ weatherData.weather[0].description }}</p>
      <!-- Display humidity -->
      <p>Humidity: {{ weatherData.main.humidity }}%</p>
      <!-- Display pressure -->
      <p>Pressure: {{ weatherData.main.pressure }} hPa</p>
      <!-- Display wind speed -->
      <p>Wind Speed: {{ weatherData.wind.speed }} m/s</p>
      <!-- Display wind direction -->
      <p>Wind Direction: {{ weatherData.wind.deg }}°</p>
      <!-- Display cloudiness -->
      <p>Cloudiness: {{ weatherData.clouds.all }}%</p>
      <!-- Display visibility -->
      <p>Visibility: {{ weatherData.visibility }} meters</p>
      <!-- Display sunrise time -->
      <p>Sunrise: {{ formatUnixTimestamp(weatherData.sys.sunrise) }}</p>
      <!-- Display sunset time -->
      <p>Sunset: {{ formatUnixTimestamp(weatherData.sys.sunset) }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'WeatherDisplay',
  data() {
    return {
      city: '',
      weatherData: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    // Method to fetch weather data
    async fetchWeather() {
      try {
        this.loading = true;
        this.error = null;
        // Get city name from input field
        const cityName = this.city.split(',')[0].trim();
        // Fetch weather data from API
        const response = await axios.get(`http://localhost:3000/weather?city=${cityName}`);
        // Update weatherData with fetched data
        this.weatherData = response.data;
        // Emit event to notify parent component that weather data is received
        this.$emit('weather-received', this.weatherData);
      } catch (error) {
        // Handle error if fetching fails
        this.error = 'Failed to fetch weather data';
      } finally {
        this.loading = false;
      }
    },
    // Method to format Unix timestamp to readable time format
    formatUnixTimestamp(timestamp) {
      return new Date(timestamp * 1000).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    },
    // Method to handle Enter key press event
    handleKeyDown(event) {
      if (event.key === 'Enter') {
        this.fetchWeather();
      }
    },
  },
};
</script>

<style>
/* Styling for weather information */
.weather-info {
  margin-top: 20px;
}

/* Styling for error message */
.error {
  color: red;
  margin-top: 10px;
}
</style>
