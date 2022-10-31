import React from 'react'
import useApi from '../useApi/useApi';
import ItemGif from './ItemGif';


function DisplayGifts(props) {
   
   const {loading,data}=useApi(props.url)

    return (
    <div className="container-gif">
        <h3>Results with "{props.category}"</h3>
        {   
            loading ?
            data.map(img => (
                <ItemGif key={img.id} title={img.title}  url={img.images.downsized_medium.url}/>
            )):""
        }
        
    </div>
       
    
  )
}

export {DisplayGifts};