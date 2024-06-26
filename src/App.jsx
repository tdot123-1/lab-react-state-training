import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div className="likes-div">
        <LikeButton />
        <LikeButton />
      </div>
      <Counter />
      <ClickablePicture />
      <Dice />
      <div className="likes-div">
        <DiscoButton />
        <DiscoButton />
      </div>
    </div>
  );
}

export default App;
