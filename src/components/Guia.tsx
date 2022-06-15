/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"
import { Sform } from "../style"
export default function guia(props: any) {

    
    const [result, setResult] = useState(0);
    const [tipomoedaOne, setTipomedaone] = useState(1)
    const [tipomoedaTwo, setTipomedaTwo] = useState(1)
    function moedas(){
        if(tipomoedaOne===1 && tipomoedaTwo===0){
            return 1/5;
        }
        if(tipomoedaOne===0 && tipomoedaTwo===1){
            return 5;
        }
        return 1
    }
  
    
    return (<Sform>
        <form>
            <select name="select" id="m1" onChange={(event) => { setTipomedaone(parseInt(event.target.value))}} >
                <option value="1">
                    real
                </option>
                <option value="0">
                    dolar
                </option>
            </select>
            <input type="number" id="v1" placeholder="digite o valor" onChange={(event) => { setResult(parseFloat(event.target.value)*moedas());  }} />
            <select name="select" id="m2" onChange={(event) => { setTipomedaTwo(parseInt(event.target.value)) }}>
                <option value="1">
                    real
                </option>
                <option value="0">
                    dolar
                </option>
            </select>
            <input type="number" id="v2" placeholder="digite o valor" value={result} />
        </form>

    </Sform>)


}