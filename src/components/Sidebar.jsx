import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { IoIosPaper } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  return (
    <div className="flex h-full w-full items-center gap-2 p-3 pt-5 lg:flex-col">
      <div
        onClick={() =>
          navigate(location.pathname === "/discover" ? "/talk" : "/discover")
        }
        className="shadow-beige-sm flex min-w-20 cursor-pointer flex-col items-center gap-1 rounded-lg p-2 hover:border-neutral-300 hover:bg-darkBeige "
      >
        <BsStars size={24} />
        <span>Discover</span>
      </div>
      <div
        onClick={() =>
          navigate(location.pathname === "/threads" ? "/talk" : "/threads")
        }
        className="shadow-beige-sm flex min-w-20 cursor-pointer flex-col items-center gap-1 rounded-lg p-2 hover:border-neutral-300 hover:bg-darkBeige"
      >
        <IoIosPaper size={24} />
        <span>Threads</span>
      </div>
      <div
        onClick={() =>
          navigate(location.pathname === "/profile" ? "/talk" : "/profile")
        }
        className="shadow-beige-sm flex min-w-20 cursor-pointer flex-col items-center gap-1 rounded-lg p-2 hover:border-neutral-300 hover:bg-darkBeige"
      >
        <FaUser size={24} />
        <span>Profile</span>
      </div>
    </div>
  );
}

export default Sidebar;
