import { useState } from "react"

export default function Addcategories({onNewCategory: onAddCategory}) {//me funciona si recibo esa funcion desestructurandola con las props

    const[inputValue, setInputValue] = useState();

    const onInputChange = (event) =>{
        console.log(event.target.value)
        setInputValue(event.target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        console.log(inputValue);
        if(inputValue.trim().length <=1) return; //Impide que al presionar enter sin escribir nada se agregue el valor anterior  a la lista
        //setCategories(categories => [inputValue,...categories])//Esta funcion envia al otro componente el nuevo valor cuando se presiona enter
        onAddCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
        type="text" 
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
        />
    </form>
  )
}
