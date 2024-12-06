import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Menu from "./pages/menu";
import Catering from "./pages/catering";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
        <BrowserRouter>
          <div className="font-mont relative">
          {/* <img src={noise} className='absolute z-[10000] w-screen bg-repeat object-contain h-full' alt="" /> */}
          <div
            className="absolute opacity-55 inset-0 z-[10000] hero bg-repeat"
          ></div>
            <Nav />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/catering" element={<Catering />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
    </>
  );
}

export default App;
