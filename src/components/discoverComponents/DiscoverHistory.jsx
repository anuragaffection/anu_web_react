import React from "react";
import { Link } from "react-router-dom";
import { FiMessageCircle } from "react-icons/fi";

function DiscoverHistory() {
  return (
    <Link to="/history" className="block">
      <div className="rounded-3xl bg-coreBeige p-6 transition-colors hover:bg-darkBeige">
        <div className="flex items-center gap-4">
          <div className="rounded-full p-2">
            <FiMessageCircle className="h-6 w-6 text-darkGreenHigh" />
          </div>
          <div>
            <h2 className="mb-2 font-serif text-3xl">
              Download your Pi conversation history
            </h2>
            <p className="text-darkGreenHigh">Manage history</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DiscoverHistory;
