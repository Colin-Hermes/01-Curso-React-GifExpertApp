import React from 'react'

export const GifGriditem = ({id, title,url}) => {
  return (
    // <div>
    //     <li key={image.id}>{image.title}</li>
    // </div>

    <div className='gif-container gif-card'>

      <img className="gif "
           src={url} 
           alt={title} />
    </div>
    
  )
}


