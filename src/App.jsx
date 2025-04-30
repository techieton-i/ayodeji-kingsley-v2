import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Collections from "./Pages/Collections";
import ArtDetail from "@/Pages/ArtDetail";
import Navbar from "./components/Navbar";
import Gallery from "./Pages/Gallery";
import CollectionDetails from "./Pages/CollectionDetails";

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
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
