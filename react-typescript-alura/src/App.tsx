import React, {useState} from "react"
import style from "./style.module.scss"
import Formulario from "./components/Formulario"
import Lista from "./components/Lista";
import Cronometro from "./components/Cronometro";

function App() {
    const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        tempo: '02:00:00',
        selecionado: false,
        completado: false,
        id: ""
    }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00',
        selecionado: false,
        completado: false,
        id: ""
    }, {
        tarefa: 'TypeScript',
        tempo: '03:00:00',
        selecionado: false,
        completado: false,
        id: ""
    }])
    return (
        <div className={style.AppStyle}>
            <Formulario setTarefas={setTarefas} />
            <Lista tarefas={tarefas}/>
            <Cronometro/>
        </div>
    );
}

export default App;