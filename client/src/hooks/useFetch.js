import { useState, useEffect } from 'react';
import axios from 'axios';

// No changes needed here, as the full URL will be passed in from the components.
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if a URL is provided before fetching
    if (!url) {
      setLoading(false);
      return;
    };

    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch data. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;