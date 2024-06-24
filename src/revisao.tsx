import { ChangeEvent, useState } from "react";

function Revisao():JSX.Element{
    const [a,setA] = useState(0)
    const [b,setB] = useState(0)
    function soma(a:number,b:number):number{
        return a+b
    }
    function trataInput1(e:ChangeEvent<HTMLInputElement>){
        setA(Number(e.target.value))
    }
    function trataInput2(e:ChangeEvent<HTMLInputElement>){
        setB(Number(e.target.value))
    }
    return( 
        <>
            <h1>Componente</h1>
            <input type="number" onChange={trataInput1}/>
            <input type="number" onChange={trataInput2}/>
            <h1>{soma(a,b)}</h1>
        </>
    )
}
export default Revisao;
