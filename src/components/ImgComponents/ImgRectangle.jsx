import React from "react";
import { Link } from "react-router-dom";

function ImgRectangle({ to, src, alt, text, className = "" }) {
  return (
    <Link to={to} className={`block ${className}`}>
      <div className="group flex h-full min-h-36 w-full items-end justify-center overflow-hidden rounded-2xl bg-coreBeige p-4 transition-colors hover:bg-darkBeige">
        <div className="flex-1 text-xl font-medium text-darkGreen">{text}</div>

        <img
          src={src}
          alt={alt}
          className="h-auto min-h-36 w-1/2 rounded-xl bg-blue-500 object-cover transition-colors group-hover:bg-black/40"
        />
      </div>
    </Link>
  );
}

export default ImgRectangle;
