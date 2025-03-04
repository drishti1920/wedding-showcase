import { Routes, Route, BrowserRouter } from "react-router-dom";

import Films from "../pages/Films";
import Photography from "../pages/Photography";
import CoupleDetail from "../pages/CoupleDetail";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Layout from "../components/layout/Layout";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/films" element={<Films />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/photography/:coupleId" element={<CoupleDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
