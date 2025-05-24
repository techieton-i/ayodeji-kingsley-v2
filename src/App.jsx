import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Collections from "./Pages/Collections";
import ArtDetail from "@/Pages/ArtDetail";
import Navbar from "./components/Navbar";
import Gallery from "./Pages/Gallery";
import CollectionDetails from "./Pages/CollectionDetails";
import AwardShowcaseScroll from "./Pages/Awards";
import Biography from "./Pages/Biography";
import Footer from "./components/Footer";
import Exhibitions from "./Pages/Exhibitions";
import Residency from "./Pages/Residency";

function App() {
  return (
    <Suspense fallback="...loading">
      <BrowserRouter>
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
          <Route path="/art/:id" element={<ArtDetail />} />
          <Route path="/awards" element={<AwardShowcaseScroll />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/residency" element={<Residency />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
