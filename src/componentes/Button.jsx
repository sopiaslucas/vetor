import { useState } from "react";

export default function Button(){

    // adicionar
    const [lista, newLista] = useState(["Aluno"])

    function mais (){
        newLista([...lista, "Aluno novo"])
    }

    //remover
    function menos (){
        newLista(lista.slice(0, -1))
    }

    //adicionar inicio
    function addInicio(){
        
        const novaLista = [...lista]
        novaLista.unshift("Aluno (prioridade) ")
        newLista(novaLista)
    }

    //remover inicio
    function delInicio(){
        const novaLista = [...lista]
        novaLista.shift("Aluno (prioridade)")
        newLista(novaLista)
    }

    //alterar
    function alterarSegundo( ){
        const novaLista = [...lista];
        novaLista[1] = "Transferido";
        newLista(novaLista)
    }

    return(
        <div> 
            <p> {JSON.stringify(lista)} </p>
            <button onClick={mais}> Adicionar em último </button> 
            <button onClick={menos}> Remover o último </button> 
            <button onClick={addInicio}> Adicionar no ínicio </button>
            <button onClick={delInicio}> Remover do ínicio </button> 
            <button onClick={alterarSegundo}> Alterar Segundo </button>
        </div>
    )

}