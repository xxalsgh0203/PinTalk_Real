import axios from 'axios';
import { useState } from 'react';

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
      console.log('mutation res |', response);
      setValue((prev) => ({ ...prev, data: response }));
    } catch (error) {
      setValue((prev) => ({ ...prev, error }));
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
