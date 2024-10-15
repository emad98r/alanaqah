import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Man from "./Pages/Man/Man";
import Women from "./Pages/Women/Women";
import Kids from "./Pages/Kids/Kids";
import Shoes from "./Pages/Shoes/Shoes";
import Accessories from "./Pages/Accessories/Accessories";
import Cart from "./Pages/Cart/Cart";
import ToTop from "./Components/ToTop/ToTop";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Man" element={<Man />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Shoes" element={<Shoes />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <ToTop />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
