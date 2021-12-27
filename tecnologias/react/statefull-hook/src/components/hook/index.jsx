import { useState } from "react"

export const ComHooks = () => {
    const [items, setItems] = useState(['Tomate', 'Alface', 'Cebola', 'coentro']);

    const addItem = (item) => {
        setItems([...items, item])
    }

    const removeItem = (item) => {
        setItems([...items.slice(1)])
    }

    return(
        <div>
            <p>Minha lista</p>
            <br/>
            <ul>
                {items.map(item => <li>{item}</li>)}
            </ul>
            <br/>
            <button onClick={() => addItem("Cenoura")}> Adicionar item</button>
            <br/>   
            <button onClick={() => removeItem()}> Remover item</button>
        </div>
    )
}