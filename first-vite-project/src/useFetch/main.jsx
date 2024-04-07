import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

const UseFetchExample = () => {
  const [data, loading, error] = useFetch("https://dummyjson.com/products");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data && data.products ? data.products : null);
  }, [data]);

  return (
    <div className="container">
      <ul className="list">
        {products
          ? products.map((product) => <li key={product.id}>{product.title}</li>)
          : null}
      </ul>
    </div>
  );
};

export default UseFetchExample;
