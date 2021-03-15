import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-ecommerce-app-e9e30.cloudfunctions.net/api", //THE API (cloud function) URL
  // "http://localhost:5001/ecommerce-app-e9e30/us-central1/api"
});

export default instance;
