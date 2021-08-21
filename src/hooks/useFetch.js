import { useCallback, useState } from "preact/hooks";
import { API_URL } from "../constants";
import { loadCache, setCache } from "../helpers/cache";

export const useFetch = (endpoint) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const cached = loadCache(endpoint);
    if (cached !== false) {
      setData(cached);
      setLoading(false);
      return;
    }

    const response = await fetch(`${API_URL}${endpoint}`);
    const data = await response.json();

    setCache(endpoint, data);
    setData(data);
    setLoading(false);
  }, [endpoint]);

  return { loading, data, fetchData };
};

export default useFetch;
