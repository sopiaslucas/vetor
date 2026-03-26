import { useState } from "react";

export default function Inicio(){

    const [lista, newLista] = useState(["Aluno"])

    function addInicio(){
        
        const novaLista = [...lista]
        novaLista.unshift("Aluno (prioridade) ")
        newLista(novaLista)
    }

    function delInicio(){
        const novaLista = [...lista]
        novaLista.shift("Aluno (prioridade)")
        newLista(novaLista)
    }

    return(
        <div>
            <p> {JSON.stringify(lista)} </p>
            <button onClick={addInicio}> Adicionar no ínicio </button>
            <button onClick={delInicio}> Remover do ínicio </button>
        </div>
    )
}