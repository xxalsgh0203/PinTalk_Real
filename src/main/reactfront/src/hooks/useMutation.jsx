import axios from 'axios';
import { useState } from 'react';
import HttpError from '../service/httpError';

const useMutation = (url) => {
  const [value, setValue] = useState({
    data: undefined,
    loading: false,
    error: undefined,
  });

  const mutation = async (data) => {
    try {
      setValue((prev) => ({ ...prev, loading: true }));
      const response = await (await axios.post(url, data)).data;
      setValue((prev) => ({ ...prev, data: response }));
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = new HttpError(error.response.status, error.message).errorMessage;
        setValue((prev) => ({ ...prev, error: errorMessage }));
      } else {
        setValue((prev) => ({ ...prev, error: error.message }));
        return;
      }
    } finally {
      setValue((prev) => ({ ...prev, loading: false }));
    }
  };

  return {
    mutation,
    loading: value.loading,
    error: value.error,
    data: value.data,
  };
};
export default useMutation;
