import React from "react";
import { BsStars } from "react-icons/bs";
import { IoIosPaper } from "react-icons/io";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <>
      <Link
        to={"/discover"}
        className="absolute left-4 top-2 rounded-full bg-coreBeige p-2 hover:bg-darkBeige lg:hidden"
      >
        <BsStars size={24} />
      </Link>
      <Link
        to={"/threads"}
        className="absolute right-16 md:right-24 top-2 rounded-full bg-coreBeige p-2 hover:bg-darkBeige lg:hidden"
      >
        <IoIosPaper size={24} />
      </Link>
    </>
  );
}

export default TopBar;
