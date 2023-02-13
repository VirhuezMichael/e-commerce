import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../Card/LoadingSpinner";
import { gFetch } from "../utils/gFetch";
import CardDetail from "./CardDetail";

const DetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState([]);
  const { idProduct } = useParams();
  console.log(idProduct);
  useEffect(() => {
    gFetch()
      .then((resp) => setProduct(resp))
      .catch((rej) => console.log(rej))
      .finally(() => setLoading(false));
  }, []);

  console.log(product);

  const result = product.find((product) => product.id === idProduct);

  console.log(result);

  return <>{loading ? <LoadingSpinner /> : <CardDetail result={result} />}</>;
};

export default DetailContainer;
