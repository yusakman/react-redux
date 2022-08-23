import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="App">
        <Card />
      </div>
    </div>
  );
}

export default App;
