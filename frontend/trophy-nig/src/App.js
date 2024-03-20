import "./App.css";
import Banner from "./components/Banner";
import Feature from "./components/Feature";
import Navbar from "./components/Navbar";
import { useRef } from "react";

function App() {
  const containerRef = useRef();
  console.log({ current: containerRef.current });
  return (
    <div ref={containerRef} className="w-full">
      <Navbar />
      <Banner />
      <Feature />
    </div>
  );
}

export default App;
