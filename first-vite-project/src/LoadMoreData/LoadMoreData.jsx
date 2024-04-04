import { useEffect, useState } from "react";
import "./style.css";

const LoadMoreData = () => {
  const [products, setData] = useState([]);
  const [nextPortion, setNextPortion] = useState(0);
  const [totalLimit, settotalLimit] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const portion = 12;

  async function addData() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=12&skip=${nextPortion * portion}`
      );
      const data = await response.json();
      if (data) {
        settotalLimit(data.total);
        setData([...products, ...data.products]);
        setLoading(false);
      }
    } catch (err) {
      setError(err);
    }
  }

  function loadMore() {
    setNextPortion(nextPortion + 1);
  }

  useEffect(() => {
    addData();
  }, [nextPortion]);

  return (
    <div className="wrapper">
      <div className="data-container">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.images[0]} alt={product.title} />
            <h2 className="title">{product.title}</h2>
          </div>
        ))}
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error occured: {error.message}</div>
      ) : products.length < totalLimit ? (
        <button className="load-more" onClick={loadMore}>
          Load More
        </button>
      ) : null}
    </div>
  );
};

export default LoadMoreData;
