const baseURL = 'http://localhost:5000'
import axios, { AxiosResponse } from 'axios';

const apiRequest = async<T>(
  url: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  headers: Record<string, string> = { 'Content-Type': 'application/json' },
  data?: object
): Promise<T> => {
  try {
    const config = {
      method: method,
      url: baseURL + url,
      headers: headers,
      data: data, // Add the request payload for POST requests
    };

    const response: AxiosResponse<T> = await axios(config);

    // Handle a successful response here (e.g., return data or perform other actions)
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      // If the error is an instance of the Error class, you can handle it as an error.
      console.error('API Request Error:', error.message);
      throw error; // Re-throw the error if needed.
    } else {
      // Handle the error as unknown or provide a fallback behavior.
      console.error('An unknown error occurred:', error);
      throw new Error('An unknown error occurred'); // Throw a custom error if needed.
    }
  }
};

export { apiRequest as ApiRequest }