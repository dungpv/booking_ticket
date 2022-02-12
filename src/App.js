import "./App.css";
import DemoGrid from "./TailwindComponent/DemoGrid";
import FlexDemo from "./TailwindComponent/FlexDemo";
import PaddingMarginDemo from "./TailwindComponent/PaddingMarginDemo";
import WidthHeightDemo from "./TailwindComponent/WidthHeightDemo";

function App() {
  return (
    <div className="App">
      {/* <DemoGrid></DemoGrid>
      <PaddingMarginDemo></PaddingMarginDemo>
      <WidthHeightDemo></WidthHeightDemo> */}
      <FlexDemo></FlexDemo>
    </div>
  );
}

export default App;
