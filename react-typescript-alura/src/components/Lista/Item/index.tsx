import style from "../Lista.module.scss"
import {ITarefa} from "../../../types/tarefas";

export default function Item({tarefa, tempo, selecionado, completado, id}: ITarefa) {
    console.log("Item atual:", {tarefa, tempo, selecionado, completado, id})
    return (
        <li className={style.item}>
            <h3> {tarefa} </h3>
            <span> {tempo} </span>
        </li>
    )
}