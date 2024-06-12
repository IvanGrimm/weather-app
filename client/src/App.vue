<template>
  <div>
    <!-- Image container -->
    <div class="image-container" :class="{ 'shrink-image': weatherDataLoaded }">
      <img alt="Weather App logo" src="./assets/weather-app.png">
      
    </div>
    <!-- Weather component -->
    <Weather class="weahte" @weather-received="handleWeatherReceived" />
  </div>
  <div class="creds">
    <a href="https://www.flaticon.com/free-icons/weather-app" title="weather app icons">Weather app icons created by kliwir art - Flaticon</a>
  </div>
</template>

<script>
import Weather from './components/Weather.vue';

export default {
  name: 'App',
  components: {
    Weather,
  },
  data() {
    return {
      weatherData: null,
      weatherDataLoaded: false, // Add a flag to track if weather data is loaded
    };
  },
  methods: {
    handleWeatherReceived(weatherData) {
      // Set the weatherData and update the flag when received from the Weather component
      this.weatherData = weatherData;
      this.weatherDataLoaded = true;
    },
  },
};
</script>

<style>
/* Image container */
.image-container {
  display: inline-block;

}

/* Image container */
.image-container img{
  max-width: 300px; 
}

/* Class to shrink the image */
.shrink-image {
  transform: scale(0.8);
  transition: transform 0.5s ease; 
  transform-origin: center; 
}

/* Additional styling for the Weather component */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.creds {
    font-size: 12px;
    position: absolute;
    bottom: 0px;
}
</style>
