import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { useRef } from "react";

function App() {
  const containerRef = useRef();
  console.log({ current: containerRef.current });
  return (
    <div ref={containerRef} className="App">
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
