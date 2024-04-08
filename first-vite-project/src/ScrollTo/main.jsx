import { useRef } from "react";
import { useFetch } from "../useFetch/useFetch";

const ScrollTo = () => {
  const [data, loading, error] = useFetch("https://dummyjson.com/products");
  const bottomRef = useRef(null);

  function scrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <div className="container">
      <button onClick={scrollToBottom}>Scroll to bottom</button>
      {data &&
        data.products &&
        data.products.length &&
        data.products.map((product) => (
          <div style={{ margin: "20px" }} className="product">
            {product.title}
          </div>
        ))}
      <button ref={bottomRef} onClick={scrollToTop}>
        Scroll to top
      </button>
    </div>
  );
};

export default ScrollTo;
