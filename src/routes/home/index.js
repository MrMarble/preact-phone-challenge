import { useEffect, useState } from "preact/hooks";
import useFetch from "../../hooks/useFetch";
import Home from "./Home";

export const HomeContainer = () => {
  const { loading, fetchData, data } = useFetch("/api/product");
  const [filtered, setFiltered] = useState(data);

  const handleSearch = (search) => {
    console.log("Searching for", search);
    setFiltered(
      data.filter(
        (item) =>
          item.brand.toUpperCase().includes(search.toUpperCase()) ||
          item.model.toUpperCase().includes(search.toUpperCase())
      )
    );
  };

  useEffect(() => {
    setFiltered(data);
  }, [data]);

  useEffect(() => {
    console.log("Fetch Data");
    fetchData();
  }, [fetchData]);

  return (
    <Home handleSearch={handleSearch} items={filtered} loading={loading} />
  );
};

export default HomeContainer;
