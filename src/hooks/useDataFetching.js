import { ref } from 'vue';
import { fetchData as fetchFromApi } from '../api/apiService';

export function useDataFetching() {
  const loading = ref(false);
  const error = ref(null);

  async function fetchData() {
    loading.value = true;
    try {
      const response = await fetchFromApi();
      loading.value = false;
      return response;
    } catch (error) {
      console.error(error);
      error.value = error.message;
      loading.value = false;
      throw error;
    }
  }

  return { loading, error, fetchData };
}
