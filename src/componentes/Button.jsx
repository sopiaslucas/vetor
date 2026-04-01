import { useState } from "react";
import "./styles.css";

export default function Button() {

  const [lista, newLista] = useState(["Aluno"]);

  function mais (){
    newLista([...lista, "Aluno novo"]);
  }

  function menos (){
    newLista(lista.slice(0, -1));
  }

  function addInicio(){
    const novaLista = [...lista];
    novaLista.unshift("Aluno (prioridade)");
    newLista(novaLista);
  }

  function delInicio(){
    const novaLista = [...lista];
    novaLista.shift();
    newLista(novaLista);
  }

  function alterarSegundo(){
    const novaLista = [...lista];
    if(novaLista[1]) novaLista[1] = "Transferido";
    newLista(novaLista);
  }

  return(
    <div className="container">

      <div className="header">
        <h1>Sistema de Alunos</h1>
        <p>Mini Projeto React</p>
      </div>

      <p className="lista">{JSON.stringify(lista)}</p>

      <div className="botoes">
        <button onClick={mais}>Adicionar em último</button> 
        <button onClick={menos}>Remover o último</button> 
        <button onClick={addInicio}>Adicionar no início</button>
        <button onClick={delInicio}>Remover do início</button> 
        <button onClick={alterarSegundo}>Alterar Segundo</button>
      </div>

      <div className="footer">
        Projeto React - Infonet
      </div>

    </div>
  );
}
