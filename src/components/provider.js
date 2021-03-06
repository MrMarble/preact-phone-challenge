import { createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import useFetch from "../hooks/useFetch";

const ProviderContext = new createContext();

export const useProvider = () => useContext(ProviderContext);

export const Provider = ({ children }) => {
  const { loading, fetchData, data } = useFetch("/api/product");
  const [phones, setPhones] = useState([]);
  const [cart, setCart] = useState(0);

  useEffect(() => {
    setPhones(data);
  }, [data, setPhones]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ProviderContext.Provider
      value={{ phones, setPhones, loading, cart, setCart }}
    >
      {children}
    </ProviderContext.Provider>
  );
};
