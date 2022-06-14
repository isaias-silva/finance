/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react"
import { Sform } from "../style"
export default function guia(props: any) {

    const [moedaOne, setMoedaOne] = useState(0);
    const [moedaTwo, setMoedaTwo] = useState(0);
    const [tipomoedaOne, setTipomedaone] = useState(' ')
    const [tipomoedaTwo, setTipomedaTwo] = useState(' ')

  
    
    return (<Sform>
        <form>
            <select name="select" id="m1" onChange={(event) => { setTipomedaone(event.target.value) }} >
                <option value="real">
                    real
                </option>
                <option value="dolar">
                    dolar
                </option>
            </select>
            <input type="number" id="v1" placeholder="digite o valor" onChange={(event) => { setMoedaTwo(parseFloat(event.target.value)*5);  }} />
            <select name="select" id="m2" onChange={(event) => { setTipomedaTwo(event.target.value) }}>
                <option value="real">
                    real
                </option>
                <option value="dolar">
                    dolar
                </option>
            </select>
            <input type="number" id="v2" placeholder="digite o valor" value={moedaTwo} />
        </form>

    </Sform>)


}