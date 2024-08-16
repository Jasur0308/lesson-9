import { useEffect, useState } from 'react';
import apiInstance from '../api/axios';

const useFetch = (URL) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await apiInstance.get(URL);
        setData(response.data.recipes);
      } catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, [URL]);

  return data;
};

export default useFetch;