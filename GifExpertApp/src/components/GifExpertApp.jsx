
import React, { useState } from 'react'
import Addcategories from './Addcategories';
import {GifGrid} from './GifGrid';

export default function GifExpertApp() {

    //creando un hook para mantener el estado, en este caso es el useState
    const[categories, setCategories] = useState(['Solo Leveling']);

    //creando una funcion para agregar una categoria a las ya existentes
    const onAddCategory = (onNewCategory) =>{
      if(categories.includes(onNewCategory)) return;
        setCategories([onNewCategory,...categories]);
    }

    console.log(categories);

  return (
    <>
      <h1>GifExpertApp</h1>

      {/*Aqui vamos a colocar el componente addcategories*/}
      <Addcategories onNewCategory={value => onAddCategory(value)}/>


        {/*Listado de Gifs*/}     
      {
        categories.map((categories) =>(
          <GifGrid 
          categories={categories}
          key={categories} />
        ))
        
      
      
      }
    </>
  )
}
