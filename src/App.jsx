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
          <div className="font-mont">
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
