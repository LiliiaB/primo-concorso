import "./App.css";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { NavBar } from "../NavBar/NavBar";
import { Loader } from "../Loader/Loader";
import { Footer } from "../Footer/Footer";
import NotFoundPage from "../../Pages/NotFoundPage";

const HomePage = lazy(() => import("../../Pages/HomePage"));
const TermsPage = lazy(() => import("../../Pages/TermsPage"));
const GalleryPage = lazy(() => import("../../Pages/GalleryPage"));

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
}
