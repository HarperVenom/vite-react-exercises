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
import GithubProfileFinder from "./GithubProfileFinder/main";
import FilterSearch from "./FilterSearch/main";
import TicTacToe from "./TicTacToe/main";
import FeatureFlagsState from "./feature-flag-implementation/Context";
import FeatureFlagsComponent from "./feature-flag-implementation/main";
import UseFetchExample from "./useFetch/main";
import UseClickOutsideHookExample from "./useClickOutsideHook/main";
import UseWindowResizHookTest from "./useWindowSize/main";

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
      {/* <CustomModal></CustomModal> */}
      {/* <GithubProfileFinder></GithubProfileFinder> */}
      {/* <FilterSearch></FilterSearch> */}
      {/* <TicTacToe></TicTacToe> */}
      {/* <FeatureFlagsState>
        <FeatureFlagsComponent></FeatureFlagsComponent>
      </FeatureFlagsState> */}
      {/* <UseFetchExample></UseFetchExample> */}
      {/* <UseClickOutsideHookExample></UseClickOutsideHookExample> */}
      <UseWindowResizHookTest></UseWindowResizHookTest>
    </div>
  );
}

export default App;
