import "./App.css";
import FillerWidget from "./FillerWidget";
import InfiniteScroll from "./InfiniteScroll";
import Sidebar from "./Sidebar";
import TweetComponent from "./TweetComponent";
import GoogleMap from "./GoogleMap";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="flex">
        <div className="h-full justify-center flex bg-pink-300"></div>
        <div className="justify-between flex flex-col">
          <div className="p-7">
            <TweetComponent />
          </div>
          <div className="p-7">
            <InfiniteScroll />
          </div>
        </div>
        <div className="">
          <div className="mb-4 rounded-lg">
            <GoogleMap />
          </div>
          <div>
            <FillerWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
