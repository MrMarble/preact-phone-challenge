import { createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import useFetch from "../hooks/useFetch";

const ProviderContext = new createContext();

export const useProvider = () => useContext(ProviderContext);

export const Provider = ({ children }) => {
  const { loading, fetchData, data } = useFetch("/api/product");
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    setPhones(data);
  }, [data, setPhones]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ProviderContext.Provider value={{ phones, setPhones, loading }}>
      {children}
    </ProviderContext.Provider>
  );
};
