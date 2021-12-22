import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID YaKb3_aUdgfnL6yXdGylPj6kYKQ-jkiFmRf3vQtdBcc",
  },
});
