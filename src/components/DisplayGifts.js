import React from "react";
import useApi from "../useApi/useApi";
import ItemGif from "./ItemGif";
import Pagination from "./Pagination";

function DisplayGifts(props) {
  const { loading, data, totalItems } = useApi(props.url);
  



  const indexOfLastItem = props.page * props.itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - props.itemsPerPage;

  const pagesMax =Math.ceil(totalItems / props.itemsPerPage) ;

  return (
    <>
    {
      props.category ?<h3 className="my-4">Results with "{props.category}"</h3>:" "
    }
    
      <div className="container-gif">
        
        {loading
          ? data
              .slice(indexOfFirstItem, indexOfLastItem)
              .map((img) => (
                <ItemGif
                  className="grid-item"
                  key={img.id}
                  title={img.title}
                  url={img.images.downsized_medium.url}
                  height={img.images.downsized_medium.height}
                  width={img.images.downsized_medium.width}
                  wid
                />
              ))
          : ""}
      </div>
      {
        props.category?( <Pagination page={props.page} setPage={props.setPage} pagesMax={pagesMax} setOffset={props.setOffset}/>):""
      }
     
    </>
  );
}

export { DisplayGifts };