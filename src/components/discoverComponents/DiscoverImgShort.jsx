import React from "react";
import ImgRectangle from "../ImgComponents/ImgRectangle";
import ImgSquareSm from "../ImgComponents/ImgSquareSm";

// we are using this one 
function DiscoverImgShort({ discoverData }) {
  console.log(discoverData);
  return (
    <div className="grid w-full grid-cols-1 gap-4">
      <div className="grid grid-cols-2 gap-4">
        {discoverData &&
          discoverData
            .slice(0, 2)
            .map((item, index) =>
              item.type === "square" ? (
                <ImgSquareSm
                  key={index}
                  to={item.to}
                  src={item.src}
                  alt={item.alt}
                  text={item.text}
                />
              ) : null,
            )}
      </div>

      {discoverData && discoverData[2]?.type === "rectangle" && (
        <ImgRectangle
          to={discoverData[2].to}
          src={discoverData[2].src}
          alt={discoverData[2].alt}
          text={discoverData[2].text}
        />
      )}

      {discoverData && discoverData[3]?.type === "square" && (
        <ImgSquareSm
          to={discoverData[3].to}
          src={discoverData[3].src}
          alt={discoverData[3].alt}
          text={discoverData[3].text}
        />
      )}

      {discoverData && discoverData[4]?.type === "rectangle" && (
        <ImgRectangle
          to={discoverData[4].to}
          src={discoverData[4].src}
          alt={discoverData[4].alt}
          text={discoverData[4].text}
        />
      )}

      <div className="grid grid-cols-2 gap-4">
        {discoverData &&
          discoverData
            .slice(5, 7)
            .map((item, index) =>
              item.type === "square" ? (
                <ImgSquareSm
                  key={index}
                  to={item.to}
                  src={item.src}
                  alt={item.alt}
                  text={item.text}
                />
              ) : null,
            )}
      </div>

      {discoverData && discoverData[7]?.type === "square" && (
        <ImgSquareSm
          to={discoverData[7].to}
          src={discoverData[7].src}
          alt={discoverData[7].alt}
          text={discoverData[7].text}
        />
      )}
    </div>
  );
}

export default DiscoverImgShort;
