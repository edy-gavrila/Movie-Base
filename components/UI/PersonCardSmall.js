import Image from "next/image";
import React from "react";
import { makeFullImageUrl } from "../../APIs/tmdb";

function PersonCardSmall({ relativePath, name, character }) {
  const imageHeight = 278;
  const imageWidth = 185;
  let fullImageUrl;
  if (relativePath) {
    fullImageUrl = makeFullImageUrl(relativePath, imageWidth);
  }
  return (
    <div className="rounded-md overflow-hidden w-[92px] ">
      {fullImageUrl && (
        <Image
          src={fullImageUrl}
          alt="Actor Image"
          width={imageWidth / 2}
          height={imageHeight / 2}
          layout="fixed"
        />
      )}
      <div className=" text-sm leading-[0.75rem]">
        <small className=" text-black block mb-1">{name}</small>
        {character && <small className="italic">{`as ${character}`}</small>}
      </div>
    </div>
  );
}

export default PersonCardSmall;
