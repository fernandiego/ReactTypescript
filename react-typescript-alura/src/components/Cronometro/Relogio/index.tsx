import style from './Relogio.module.scss';
import {types} from "sass";
import String = types.String;

interface Props {
    tempo: number | undefined
}

export default function Relogio({tempo = 0}: Props) {
    const minutos = Math.floor(tempo / 60)
    const segundos = tempo % 60
    // @ts-ignore
    const [minutoDezena, minutoUnidade] = minutos.toString().padStart(2, '0');
    // @ts-ignore
    const [segundoDezena, segundoUnidade] = segundos.toString().padStart(2, '0');


    return (
        <>
            <span className={style.relogioNumero}>{minutoDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </>
    )
}