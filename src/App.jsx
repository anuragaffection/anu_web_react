import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import SectionChat from "./components/SectionChat";
import Sidebar from "./components/Sidebar";
import DicoverImgLayout from "./components/discoverComponents/DicoverImgLayout";
import DicoverImgLayout2 from "./components/discoverComponents/DiscoverImgL2";

// pages
import Discover from "./pages/Discover";
import Profile from "./pages/Profile";
import Thread from "./pages/Thread";
import NoPage from "./pages/NoPage";
import DiscoverImgLayout from "./components/discoverComponents/DiscoverImgLayout";

function App() {
  return (
    <div className="flex h-full max-h-screen min-h-screen w-full flex-col lg:flex-row">
      <div className="w-full border border-r-neutral-300 lg:w-24">
        <Sidebar />
      </div>
      <div className="hidden lg:block">
        <Routes>
          <Route path="/" element={<> </>} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/threads" element={<Thread />} />
          <Route path="/talk" element={<></>} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      <div className="flex-1">
        <SectionChat />
      </div>
    </div>
  );
}

export default App;
