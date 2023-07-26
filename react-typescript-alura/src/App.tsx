import React from "react"
import style from "./style.module.scss"
import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

function App() {
    return (
        <div className={style.AppStyle}>
            <div>
                <Formulario/>
            </div>
            <p></p>
            <div>
                <Lista/>
            </div>
        </div>
    );
}

export default App;