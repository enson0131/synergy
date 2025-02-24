// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import YQuill from "./pages/Yquill/index.tsx";
import { Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/yquill" element={<YQuill />} />
      {/* <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} /> */}
    </Routes>
  </BrowserRouter>
);
