import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";
import ProductDetail from "../pages/ProductDetail";
import NotFound from "../pages/NotFound";
import AddProduct from "../pages/AddProduct";
import Navbar from "../components/Navbar/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
