import "./App.css";
import { AwesomeButton } from "./components/awesomeButton/AwesomeButton";
import { ClearButton } from "./components/clearButton/ClearButton";
import { WaveButton } from "./components/waveButton/WaveButton";
import { NavBar } from "./components/navBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <AwesomeButton />
      <ClearButton />
      <WaveButton />
    </div>
  );
}

export default App;
