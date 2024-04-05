import { useEffect, useState } from "react";
import "./style.css";

const ScrollProgress = ({ url }) => {
  const [data, setData] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function updateProgress() {
    const scroll = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    const newProgress = (scroll / (scrollHeight - clientHeight)) * 100;
    setProgress(newProgress);
  }

  async function loadData(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      data ? setData(data) : setData(null);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData(url);
    window.addEventListener("scroll", updateProgress);
  }, [url]);

  return (
    <div className="container">
      <div className="loading-bar">
        <div className="completed" style={{ width: progress + "%" }}></div>
      </div>
      <div className="content">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">Error: {error}</div>
        ) : data && data.products && data.products.length > 0 ? (
          data.products.map((item) => (
            <div className="item" key={item.id}>
              {item.title}
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
};

export default ScrollProgress;
