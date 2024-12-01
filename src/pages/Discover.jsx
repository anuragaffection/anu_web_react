import React from "react";

import {
  discoverData1,
  discoverData2,
  discoverData3,
  discoverData4,
} from "../data/discoverData";
import DiscoverImgShort from "../components/discoverComponents/DiscoverImgShort";
import DiscoverHistory from "../components/discoverComponents/DiscoverHistory";

function Discover() {
  return (
    <div className="flex h-full w-96 overflow-y-auto border border-r-neutral-300 bg-beige p-6 scrollbar-hide">
      <div className="flex w-full flex-col space-y-6">
        {/* Greeting */}
        <h1 className="font-serif text-3xl text-darkGreen">
          Good afternoon, <span className="italic">Anurag</span>
        </h1>
        <DiscoverHistory />
        <DiscoverImgShort discoverData={discoverData1} />;
        <DiscoverImgShort discoverData={discoverData2} />;
        <DiscoverImgShort discoverData={discoverData3} />;
        <DiscoverImgShort discoverData={discoverData4} />;
      </div>
    </div>
  );
}

export default Discover;
