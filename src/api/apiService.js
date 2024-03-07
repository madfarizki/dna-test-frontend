import axios from '@/axios.js';

const API_KEY = '6c85dc97afa64a9aa85a82ba4dccbbbb';

async function fetchData() {
  try {
    const response = await axios.get(`/everything?q=indonesia&apiKey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { fetchData };
