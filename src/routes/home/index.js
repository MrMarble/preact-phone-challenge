import { useEffect, useState } from "preact/hooks";
import { useProvider } from "../../components/provider";
import Home from "./Home";

export const HomeContainer = () => {
  const { loading, phones } = useProvider();
  const [filtered, setFiltered] = useState(phones);

  const handleSearch = (search) => {
    setFiltered(
      phones.filter(
        (item) =>
          item.brand.toUpperCase().includes(search.toUpperCase()) ||
          item.model.toUpperCase().includes(search.toUpperCase())
      )
    );
  };

  useEffect(() => {
    setFiltered(phones);
  }, [phones]);

  return (
    <Home handleSearch={handleSearch} items={filtered} loading={loading} />
  );
};

export default HomeContainer;
