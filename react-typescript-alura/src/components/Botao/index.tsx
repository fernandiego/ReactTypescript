import './botao.css'
import React from "react";

class Botao extends React.Component {
        onclick = () => {
            console.log('asdasd')
        }
    render() {

        return(
            <button onClick={this.onclick}>Botão</button>
        )
    }
}

export default Botao;