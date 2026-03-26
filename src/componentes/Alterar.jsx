import { useState } from "react";

export default function Alterar () {

    const [lista, newLista] = useState(["Sana", "Mina", "Momo"])

    function alterarSegundo( ){
        const novaLista = [...lista];
        novaLista[1] = "Transferido";
        newLista(novaLista)
    }

    return(
        <div>
        <p>{JSON.stringify(lista)}</p>
        <button onClick={alterarSegundo}> Alterar Segundo </button>
        </div>
    )
}