import axios from 'axios';

const API_KEY = '6c85dc97afa64a9aa85a82ba4dccbbbb';
const BASE_URL = 'https://newsapi.org/v2';

async function fetchData() {
  try {
    const response = await axios.get(`${BASE_URL}/everything?q=indonesia&apiKey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { fetchData };
