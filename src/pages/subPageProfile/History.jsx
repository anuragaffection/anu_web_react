import React from "react";
import { useNavigate } from "react-router-dom";

function History() {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full border border-r-neutral-300 bg-beige lg:w-96">
      <div className="p-6">
        <button
          onClick={() => {
            localStorage.removeItem("threadsCollection");
            navigate("/");
            window.location.reload();
          }}
          className="flex w-full items-center justify-between rounded-lg bg-darkGreenHigh px-3 py-2 text-left text-beige transition-colors hover:bg-darkGreen"
        >
          Clear Chats
        </button>
      </div>
    </div>
  );
}

export default History;
