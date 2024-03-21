import "./App.css";
import Banner from "./components/Banner";
import Designer from "./components/Designer";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useRef } from "react";
import TopRated from "./components/TopRated";
import PlayStore from "./components/PlayStore";

function App() {
  const containerRef = useRef();
  console.log({ current: containerRef.current });
  return (
    <div ref={containerRef} className="w-full">
      <Navbar />
      <Banner />
      <Feature />
      <Designer />
      <TopRated />
      <PlayStore />
      <Footer />
    </div>
  );
}

export default App;
