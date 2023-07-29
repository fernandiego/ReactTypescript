import style from "./Botao.module.scss";
import React from "react";


class Botao extends React.Component<{

    type?: "button" | "submit" | "reset" | undefined,
    onCLick?: () => void,
    children: React.ReactNode;
}> {
    render() {
        const {type = "button", onCLick} = this.props
        return (
            <button onClick={onCLick} type={type} className={style.botao}>
                {this.props.children}
            </button>
        );
    }
}

export default Botao;
