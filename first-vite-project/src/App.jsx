import Accordion from "./Accordion/Accordion";
import RandomColor from "./RandomColor/RandomColor";
import StarRating from "./StarRating/StarRating";
import ImageSlider from "./ImageSlider/ImageSlider";
import LoadMoreData from "./LoadMoreData/LoadMoreData";
import TreeView from "./TreeView";
import Data from "./TreeView/data";
import QRCodeGenerator from "./QRCodeGenerator";
import LightDarkMode from "./LightDarkMode";
import ScrollProgress from "./ScrollProgress";
import Tabs from "./Tabs";
import CustomModal from "./CustomModal/main";

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
      {/* <LightDarkMode></LightDarkMode> */}
      {/* <ScrollProgress
        url={`https://dummyjson.com/products?limit=100`}
      ></ScrollProgress> */}
      {/* <Tabs
        tabs={[
          { label: "First", content: "Apple" },
          { label: "Second", content: "Orange" },
          { label: "Third", content: "Strawberry" },
        ]}
      ></Tabs> */}
      <CustomModal></CustomModal>
    </div>
  );
}

export default App;
