import { GifGriditem } from './GifGriditem.jsx';
import { useFetchGifs } from '../hooks/useFetchGifs.js';

export const GifGrid = ({categories}) => {
  
  const {images , isLoading} = useFetchGifs(categories);
  console.log(images,isLoading);
  

      
      return (
   
      <>
      <h2 className='categoria'>{categories}</h2>

      {
        isLoading && (<h2>Cargando...</h2>)
      }
      
      <div className='galeria'>
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


