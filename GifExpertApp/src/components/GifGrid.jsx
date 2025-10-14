import React, { useEffect, useState } from 'react'
import GifExpertApp from './GifExpertApp'
import {getGifs} from '../helpers/getGifs.js'
import { GifGriditem } from './GifGriditem.jsx';

export const GifGrid = ({categories}) => {
  
      const [images,setImages] = useState([]);

      //El useEffect sirve para disparar efectos secundarios(codigo)

      const getImages = async() => {
        const newImages = await getGifs(categories);
        setImages(newImages)
      }

      useEffect(() =>{
        getImages();
  
      },[])

      
      return (
   
      <>
      <h2>{categories}</h2>
      
      <div className='galeria '>
        {images.map(image =>
          (<GifGriditem 
            key={image.id}
            {...image}
          />
                   ))}
      </div>
    
      </>
  )
}


