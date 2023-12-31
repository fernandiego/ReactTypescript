import React, {useState} from "react"
import style from "./style.module.scss"
import Formulario from "./components/Formulario"
import Lista from "./components/Lista";
import Cronometro from "./components/Cronometro";
import {ITarefa} from "./types/tarefas";

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[]>([])
    const [selecionado, setSelecionado] = useState<ITarefa>()

    function selecionaTarefa(tarefaSelecionada: ITarefa) {
        setSelecionado(tarefaSelecionada);
        setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
            ...tarefa,
            selecionado: tarefa.id === tarefaSelecionada.id ? true : false
        })))
    }

    function finalizarTarefa() {
        if (selecionado) {
            setSelecionado(undefined);
            setTarefas((tarefasAnteriores) => {
                return tarefasAnteriores.map((tarefa) => {
                    if (tarefa.id === selecionado.id) {
                        return {
                            ...tarefa,
                            selecionado: false,
                            completado: true,
                        };
                    }
                    return tarefa; // Return the original tarefa for other cases
                });
            });
        }
    }


    return (
        <div className={style.AppStyle}>
            <Formulario setTarefas={setTarefas}/>
            <Lista
                tarefas={tarefas}
                selecionaTarefa={selecionaTarefa}/>
            <Cronometro finalizarTarefa={finalizarTarefa} selecionado={selecionado}/>
        </div>
    );
}

export default App;