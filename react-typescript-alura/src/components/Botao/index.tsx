import './botao.css'
import React from "react";

class Botao extends React.Component {
        onclick = () => {
            console.log('asdasd')
        }

    render() {
        const estaAtivo = true
        const styles = {backgroundColor: estaAtivo ? "green" : "red" }
        return(
            <button onClick={this.onclick} style={styles}>Botão</button>
        )
    }
}

export default Botao;