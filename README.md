# Weather App

This is a simple weather application that allows users to fetch weather data for a specific city.

## Technologies Used

### Client Side
- Vue.js: Frontend framework for building user interfaces
- Axios: HTTP client for making requests to the server

### Server Side
- Node.js: JavaScript runtime environment for running server-side code
- Express.js: Web application framework for Node.js used to build RESTful APIs
- Axios: HTTP client for making requests to external APIs
- dotenv: Module to load environment variables from a .env file
- CORS: Middleware for enabling Cross-Origin Resource Sharing

## Folder Structure
```
weather-app
│   README.md
│
└───client
│   │   // Vue.js frontend code
│   │   ...
│
└───server
    │   // Node.js backend code
    │   ...
```

## How to Run

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your_username/weather-app.git
   ```

2. **Install Dependencies:**
   - Navigate to the client folder and install frontend dependencies:
     ```bash
     cd client
     npm install
     ```
   - Navigate to the server folder and install backend dependencies:
     ```bash
     cd ../server
     npm install
     ```

3. **Set Up Environment Variables:**
   - Create a `.env` file in the server folder and add your OpenWeatherMap API key:
     ```
     API_KEY=your_openweathermap_api_key
     ```

4. **Run the Application:**
   - Start the backend server:
     ```bash
     npm start
     ```
   - Start the frontend application:
     ```bash
     cd ../client
     npm run serve
     ```

5. **Access the Application:**
   - Open your web browser and go to `http://localhost:8080` to access the weather application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
