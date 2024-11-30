import React from "react";
import { Link } from "react-router-dom";
import { FiMessageCircle } from "react-icons/fi";

function DiscoverHistory() {
  return (
    <Link href="/history" className="block">
      <div className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-purple-100 p-2">
            <FiMessageCircle className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h2 className="mb-2 font-serif text-2xl text-[#004d40]">
              Download your Pi conversation history
            </h2>
            <p className="text-emerald-600">Manage history</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DiscoverHistory;
