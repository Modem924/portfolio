import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainPage, Navigationbar } from "./components";

const App = () => {
  return (
    <div style={{ animation: 'fade-in 3s ease-in-out' }}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navigationbar />
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 100;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
