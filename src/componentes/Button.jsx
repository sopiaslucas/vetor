import { useState } from "react";
import "./styles.css";

export default function Button() {

  const [lista, newLista] = useState(["Aluno", " Aluno"]);

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

      //<p className="lista">{JSON.stringify(lista)}</p>
  return(
    
    <div className="container">

  
        <div style={{
          backgroundColor: '#ffffffff',
          margin: '30px 10px 30px',
          padding: '30px',
          borderRadius: '6px',
        }}id="nominho" >
          <h2 style={{color: '#000'}}> Lista de Alunos </h2>
        <ul >
            {lista.map((nome, index) => (
                <li key={index} type="none">{nome}</li>
            ))}
        </ul>
        </div>


      <div className="botoes">
        <button onClick={mais}>Adicionar em último</button> 
        <button onClick={menos}>Remover o último</button> 
        <button onClick={addInicio}>Adicionar no início</button>
        <button onClick={delInicio}>Remover do início</button> 
        <button onClick={alterarSegundo}>Alterar Segundo</button>
      </div>


    </div>
  );
}
