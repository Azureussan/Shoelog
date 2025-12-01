import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const api = {
  // Simulasi API call untuk mendapatkan data sepatu
  getShoes: async () => {
    try {
      // Dalam implementasi nyata, ini akan memanggil API sebenarnya
      // Untuk demo, kita return data lokal
      const response = await axios.get(`${API_BASE_URL}/posts?_limit=5`);
      return response.data;
    } catch (error) {
      console.error('Error fetching shoes:', error);
      throw error;
    }
  },

  // Simulasi API call untuk mendapatkan detail sepatu
  getShoeDetail: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/posts/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching shoe detail:', error);
      throw error;
    }
  }
};