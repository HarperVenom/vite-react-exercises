import Accordion from "./Accordion/Accordion";
import RandomColor from "./RandomColor/RandomColor";
import StarRating from "./StarRating/StarRating";
import ImageSlider from "./ImageSlider/ImageSlider";
import LoadMoreData from "./LoadMoreData/LoadMoreData";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}
      <LoadMoreData></LoadMoreData>
    </div>
  );
}

export default App;
