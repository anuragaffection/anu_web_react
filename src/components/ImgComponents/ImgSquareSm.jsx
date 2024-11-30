import React from "react";
import { Link } from "react-router-dom";

function ImgSquareSm({ to, src, alt, text, className = "" }) {
  return (
    <Link to={`${to}`} className={`block ${className}`}>
      <div className="group relative h-full  w-full  overflow-hidden rounded-2xl">
        <img
          src={`${src}`}
          alt={`${alt}`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40">
          <h3 className="absolute bottom-4 left-4 text-xl font-medium text-white">
            {`${text}`}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default ImgSquareSm;
