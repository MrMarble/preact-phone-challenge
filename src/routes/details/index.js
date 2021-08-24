import { useEffect } from "preact/hooks";
import { useProvider } from "../../components/provider";
import { API_URL } from "../../constants";
import useFetch from "../../hooks/useFetch";
import { Details } from "./Details";

export const DetailsContainer = ({ id }) => {
  const { loading, data: phone, fetchData } = useFetch(`/api/product/${id}`);
  const { setCart, cart } = useProvider();

  const addToCart = async (params) => {
    const response = await fetch(`${API_URL}/api/cart`, {
      method: "POST",
      body: JSON.stringify({
        id: phone.id,
        ...params,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { count } = await response.json();
    setCart(cart + count);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <Details phone={phone} loading={loading} callback={addToCart} />;
};

export default DetailsContainer;
