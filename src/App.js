import Navbar from "./components/Navbar";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Singlepage from "./pages/Singlepage";

function App() {
  const Homepage = React.lazy(() => import("./pages/Homepage"));
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <Routes>
          <Route path="/netflix-clone-reactjs" exact element={<Homepage />} />
          <Route path="/movies/:id" element={<Singlepage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
