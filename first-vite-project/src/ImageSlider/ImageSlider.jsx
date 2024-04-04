import { useEffect, useState } from "react";
import "./style.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchImages(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      if (data) {
        setImages(data);

        setLoading(false);
      }
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }

  function handleRightClick() {
    currentImage === 9 ? setCurrentImage(0) : setCurrentImage(currentImage + 1);
  }
  function handleLeftClick() {
    currentImage === 0 ? setCurrentImage(9) : setCurrentImage(currentImage - 1);
  }
  function handleIndicatorClick(index) {
    setCurrentImage(index);
  }

  useEffect(() => {
    if (url !== "") fetchImages(`${url}?page=${page}&limit=${limit}`);
  }, [url]);

  //Have to check this after useEffect!!!
  //Also we cant check loading in the final return statement because
  //it doesn't get updated immidiately
  //UPD: In the next project (LoadMoreData) the method
  // described above worked though. Guess i did something differently there.
  //Dont know what
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error !== null) {
    return <div>Error {error.message}</div>;
  }

  return (
    <div className="image-slider">
      {/* {images.map((image, index) =>
        index === currentImage ? (
          <img
            key={image.id}
            src={image.download_url}
            alt={image.download_url}
            className="current-image"
          />
        ) : null
      )} */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image.download_url}
          alt={image.download_url}
          className={index !== currentImage ? "hidden" : ""}
        />
      ))}
      <BsArrowLeftCircleFill
        className="arrow left"
        onClick={handleLeftClick}
      ></BsArrowLeftCircleFill>
      <BsArrowRightCircleFill
        className="arrow right"
        onClick={handleRightClick}
      ></BsArrowRightCircleFill>
      <div className="indicators">
        {images.map((_, index) => (
          <button
            key={index}
            className={
              "image-indicator " + (index === currentImage ? "active" : "")
            }
            onClick={() => handleIndicatorClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
