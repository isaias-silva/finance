import { Sform } from "../style"
export default function guia(props:any){

return (<Sform>
    <form>
    <select name="select" id="m1" >
        <option value="real">
            real
        </option>
        <option value="dolar">
            dolar
        </option>
    </select> 
    <input type="number" id="v1" placeholder="digite o valor"/>  
    <select name="select" id="m2" >
        <option value="real">
            real
        </option>
        <option value="dolar">
            dolar
        </option>
    </select>
    <input type="number" id="v2" placeholder="digite o valor"/>
    </form>

</Sform>)


}