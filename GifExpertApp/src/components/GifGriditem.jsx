import React from 'react'

export const GifGriditem = ({id, title,url}) => {
  return (
    // <div>
    //     <li key={image.id}>{image.title}</li>
    // </div>

    <div className='gif-container gif-card gif-info gif-titulo'>
      <img className="gif "
           src={url} 
           alt={title} 
           loading='lazy'/>
      <div className="gif-acciones">
                    <button class="btn-accion">❤️</button>
                    <button class="btn-accion">📥</button>
                </div>
      <div className="gif-info"></div>
                <h3 class="gif-titulo">{title}</h3>
                <div class="gif-metadata">
                    <span>256k</span>
                    <span>MP4</span>
                </div>
      
    </div>
    
  )
}


