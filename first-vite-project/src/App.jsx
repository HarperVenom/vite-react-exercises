import Accordion from "./Accordion/Accordion";
import RandomColor from "./RandomColor/RandomColor";
import StarRating from "./StarRating/StarRating";
import ImageSlider from "./ImageSlider/ImageSlider";
import LoadMoreData from "./LoadMoreData/LoadMoreData";
import TreeView from "./TreeView";
import Data from "./TreeView/data";
import QRCodeGenerator from "./QRCodeGenerator";
import LightDarkMode from "./LightDarkMode";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}
      {/* <LoadMoreData></LoadMoreData> */}
      {/* <TreeView data={Data}></TreeView> */}
      {/* <QRCodeGenerator></QRCodeGenerator> */}
      <LightDarkMode></LightDarkMode>
    </div>
  );
}

export default App;
