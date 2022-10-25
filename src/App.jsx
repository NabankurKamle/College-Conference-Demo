import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";
import Sponsers from "./components/Sponsers";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Schedule />
      <Speakers />
      <Sponsers />
    </div>
  );
}

export default App;
