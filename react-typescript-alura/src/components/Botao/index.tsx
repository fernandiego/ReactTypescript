import style from "./Botao.module.scss";
import React from "react";

interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    onCLick?: () => void,
    children?: React.ReactNode;
}

function Botao({onCLick, type, children}: Props) {
    return (
        <button onClick={onCLick} type={type} className={style.botao}>
            {children}
        </button>
    );
}

export default Botao;
