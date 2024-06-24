type P ={
    nome: string;
    idade: number;
    cpf: string;
}
function Revisao():JSX.Element{
    const a:number = 10
    const b: number[] = [10,20,30]
    const pessoa:P  = {
        nome:"Tere",
        idade:29,
        cpf:"123.123.123-12"
    }
    return( 
        <>
            <h1>Componente</h1>
            {pessoa.nome}
            {pessoa.idade}
            {pessoa.cpf}
        </>
    )
}
export default Revisao;
