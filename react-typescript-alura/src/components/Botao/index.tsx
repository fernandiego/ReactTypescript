import React from "react";
import './botao.css'

class Botao extends React.Component {
        onclick = () => {
            console.log('asdasd')
        }

    render() {

        return(

            <button className="botao">Botão</button>
        )
    }
}

export default Botao;