import axios from 'axios';

const serverInstance = axios.create({
  baseURL: 'https://e44c6fad2e4f.ngrok-free.app/api', // On debug environment, remember to use ngrok to access your local server [Remember to config .env]
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = {
  createForm: async (formData: any) => {
    try {
      const response = await serverInstance.post('/formularios', formData);
      return response.data;
    } catch (error: any) {
      console.error('Error creating form:', error.message);
      throw error;
    }
  },

  getForms: async () => {
    try {
      const response = await serverInstance.get('/formularios');
      return response.data;
    } catch (error: any) {
      console.error('Error fetching forms:', error.message);
      throw error;
    }
  },

  getFormById: async (id: string) => {
    try {
      const response = await serverInstance.get(`/formularios/${id}`);
      return response.data;
    } catch (error: any) {
      console.error('Error fetching forms:', error.message);
      throw error;
    }
  }
}

export default api;