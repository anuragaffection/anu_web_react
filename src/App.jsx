import React from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";

// components
import SectionChat from "./components/SectionChat";
import Sidebar from "./components/Sidebar";

// pages
import Discover from "./pages/Discover";
import Profile from "./pages/Profile";
import Thread from "./pages/Thread";
import NoPage from "./pages/NoPage";
import DiscoverImgLayout from "./components/discoverComponents/DiscoverImgLayout";
import { BsStars } from "react-icons/bs";
import { IoIosPaper } from "react-icons/io";

import { FaUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function App() {
  const location = useLocation();

  const currentPath = location.pathname;
  const modalRoutes = ["/discover", "/discoverl", "/profile", "/threads"];
  const isModal = modalRoutes.includes(currentPath);

  return (
    <div className="flex h-full max-h-screen min-h-screen w-full flex-row">
      <div className="hidden w-full border border-r-neutral-300 lg:block lg:w-24">
        <Sidebar />
      </div>
      <div className="hidden lg:block">
        <Routes>
          <Route path="/" element={<> </>} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/discoverl" element={<DiscoverImgLayout />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/threads" element={<Thread />} />
          <Route path="/talk" element={<></>} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>

      {isModal && (
        <div className="fixed inset-0 z-50 flex h-full w-full flex-col items-center justify-center overflow-auto lg:hidden">
          {/* <div className="relative h-full w-full bg-lime-500"> */}

          <div className="sticky right-0 top-0 z-50 flex w-full items-center justify-between bg-beige px-4 py-2">
            <Link
              to={"/"}
              className="rounded-full bg-coreBeige p-2 hover:bg-darkBeige lg:hidden"
            >
              <IoClose size={24} />
            </Link>
            <Link
              to={"/profile"}
              className="rounded-full bg-coreBeige p-2 hover:bg-darkBeige lg:hidden"
            >
              <FaUser size={24} />
            </Link>
          </div>
          <div className="h-full w-full overflow-hidden">
            <Routes>
              <Route path="/discover" element={<Discover />} />
              <Route path="/discoverl" element={<DiscoverImgLayout />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/threads" element={<Thread />} />
            </Routes>
          </div>
          {/* </div> */}
        </div>
      )}
      <div className="flex-1 overflow-clip">
        <SectionChat />
      </div>
    </div>
  );
}

export default App;
