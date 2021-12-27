import React from "react";

export class Statefull extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                'Tomate',
                'Cebola',
                'Alface',
                'coentro'
            ]        
        }
    }

    addItem = (item) => {
        this.setState({items:[...this.state.items, item]})
    }

    removeItem = (item) => {
        this.setState({items:[...this.state.items.slice(1)]})
    }

    render() {
        const { items } = this.state
        return(
            <div>
                <p>Minha lista</p>
                <br/>
                <ul>
                    {items.map(item => <li>{item}</li>)}
                </ul>
                <br/>
                <button onClick={() => this.addItem("Cenoura")}> Adicionar item</button>
                <br/>   
                <button onClick={() => this.removeItem()}> Remover item</button>
            </div>
        )
    }
}