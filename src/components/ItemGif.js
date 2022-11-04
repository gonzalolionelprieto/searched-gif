import React from "react";

export default function ItemGif({ url,height,width }) {
  return (
    <>
      <img src={url} alt=""  width={width} height={height}/>
      
    </>
  );
}
