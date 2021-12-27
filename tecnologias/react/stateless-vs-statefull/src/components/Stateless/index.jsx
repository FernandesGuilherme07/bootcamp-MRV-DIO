const items = [
    'Tomate',
    'Cebola',
    'Alface',
    'coentro'
]   

export const Stateless = () => {
    return(

        <div>
            <p>Minha lista StateLess</p>
            <br/>
            <ul>
                {items.map(item => <li>{item}</li>)}
            </ul>
        </div>
    )
}