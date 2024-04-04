import Accordion from "./Accordion/Accordion";
import RandomColor from "./RandomColor/RandomColor";
import StarRating from "./StarRating/StarRating";
import ImageSlider from "./ImageSlider/ImageSlider";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
    </div>
  );
}

export default App;
