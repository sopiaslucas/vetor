import { useState } from "react";

export default function Adicionar(){
    const [lista, newLista] = useState(["Lisa", "Rosé", "Jisoo"])

    function mais (){
        newLista([...lista, "Aluno novo"])
    }

    function menos (){
        newLista(lista.slice(0, -1))
    }

    return(
        <div> 
            <p> {JSON.stringify(lista)} </p>
            <button onClick={mais}> Adicionar em último </button> 
            <button onClick={menos}> Remover o último </button> 
        </div>
    )
}