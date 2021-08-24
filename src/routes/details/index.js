import { useEffect, useState } from "preact/hooks";
import useFetch from "../../hooks/useFetch";
import { Details } from "./Details";

export const DetailsContainer = ({ id }) => {
  const { loading, data, fetchData } = useFetch(`/api/product/${id}`);
  const [phone, setPhone] = useState({});

  useEffect(() => {
    setPhone(data);
  }, [data]);

  useEffect(() => {
    fetchData();
  }, []);
  console.log(phone);
  return <Details phone={phone} loading={loading} />;
};

export default DetailsContainer;
