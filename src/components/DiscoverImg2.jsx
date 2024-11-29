import React from "react";
import ImgSquareSm from "./ImgComponents/ImgSquareSm";
import ImgRectangle from "./ImgComponents/ImgRectangle";

function DiscoverImg2() {
  return (
    <div className="flex flex-col space-y-4">
      <ImgRectangle
        to="/talk"
        src="/placeholder.png?height=400&width=600"
        alt="Piggy bank"
        text="How to start saving money"
        className=""
      />
      <div className="flex gap-4">
        <ImgSquareSm
          to="/talk"
          src="/placeholder.png?height=400&width=600"
          alt="Piggy bank"
          text="How to start saving money"
          className="flex-1"
        />
        <ImgSquareSm
          to="/talk"
          src="/placeholder.png?height=400&width=600"
          alt="Piggy bank"
          text="How to start saving money"
          className="flex-1"
        />
      </div>

      <ImgSquareSm
        to="/talk"
        src="/placeholder.png?height=400&width=600"
        alt="Piggy bank"
        text="How to start saving money"
        className="h-72"
      />
    </div>
  );
}

export default DiscoverImg2;
