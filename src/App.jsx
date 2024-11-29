import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import SectionChat from "./components/SectionChat";
import Sidebar from "./components/Sidebar";

// pages
import Discover from "./pages/Discover";
import Profile from "./pages/Profile";
import Thread from "./pages/Thread";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-full max-h-screen w-full">
        <div className="w-24 border border-r-neutral-300">
          <Sidebar />
        </div>
        <Routes>
          <Route path="/" element={<> </>} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/threads" element={<Thread />} />
          <Route path="/talk" element={<></>} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <div className="flex-1">
          <SectionChat />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
