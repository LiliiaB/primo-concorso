import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import NavBar from "../NavBar/NavBar";
import { Loader } from "../Loader/Loader";

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
}
