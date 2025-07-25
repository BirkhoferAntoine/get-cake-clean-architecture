import axios from 'axios';

// Define your API base URL here
const API_BASE_URL = '/api';

// Create an Axios instance with configuration
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        // Add any default headers you need here
    },
    // Any other default settings
});

// Optionally, set up interceptors for request and response
axiosInstance.interceptors.request.use(
    (config) => {
        // Modify or add any request configurations here
        // Example: Add an auth token to headers
        // config.headers['Authorization'] = 'Bearer yourAuthToken';
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        // Handle a successful response here
        return response.data; // Return directly the data
    },
    (error) => {
        // Handle an error response here
        // You could also throw an error to be caught by the calling function
        return Promise.reject(error);
    }
);

// Export the configured instance
export default axiosInstance;