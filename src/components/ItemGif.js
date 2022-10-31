import React from 'react'

export default function ItemGif({title , url}) {
  return (
    <div>
        <img src={url} alt="" />
        <h5>{title}</h5>
    </div>
  )
}
