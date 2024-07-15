import "./App.css";
import Navfun from "./components/Navfun";
// import Mobilenav from "./components/Mobilenav";
// import Navbar from "./components/Navbar";
import Otpfunctionality from "./components/Otpfunctionality";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="block md:hidden">
        <Mobilenav />
      </div> */}
      <Navfun />
      <Routes>
        <Route path="/otpfunctionality" element={<Otpfunctionality />} />
      </Routes>
    </div>
  );
}

export default App;
