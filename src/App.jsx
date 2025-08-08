import { Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Collections from "./Pages/Collections";
import Navbar from "./components/Navbar";
import Gallery from "./Pages/Gallery";
import CollectionDetails from "./Pages/CollectionDetails";
import AwardShowcaseScroll from "./Pages/Awards";
import Biography from "./Pages/Biography";
import Footer from "./components/Footer";
import Exhibitions from "./Pages/Exhibitions";
import Residency from "./Pages/Residency";
import Contact from "./Pages/ContactPage";
import ScrollToTop from "./utils/scrollToTop";
import ComingSoon from "./Pages/ComingSoon";

function App() {
  useEffect(() => {
    if (import.meta.env.VITE_APP_NODE_ENV === "production") {
      document.body.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
      return () => {
        document.body.removeEventListener("contextmenu", (e) => {
          e.preventDefault();
          e.stopPropagation();
          return false;
        });
      };
    }
  }, []);

  return (
    <Suspense fallback="...loading">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/collections" element={<Collections />} />
          <Route
            path="/collections/:category"
            element={<CollectionDetails />}
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/media" element={<AwardShowcaseScroll />} />
          <Route path="/about" element={<Biography />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/residency" element={<Residency />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
