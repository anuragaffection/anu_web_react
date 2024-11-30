import React from "react";

import DiscoverImg from "../components/DiscoverImg";
import DiscoverImg2 from "../components/DiscoverImg2";

function Discover() {
  return (
    <div className="flex h-full w-96 overflow-y-auto border border-r-neutral-300 bg-beige p-6 scrollbar-hide">
      <div className="flex w-full flex-col space-y-6">
        {/* Greeting */}
        <h1 className="font-serif text-3xl text-darkGreen">
          Good afternoon, <span className="italic">Anurag</span>
        </h1>
        <div className="flex flex-col space-y-4 pb-4">
          <DiscoverImg />
          <DiscoverImg2 />
          <DiscoverImg />
          <DiscoverImg2 />
        </div>

      </div>
    </div>
  );
}

export default Discover;
