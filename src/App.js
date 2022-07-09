import React, { Component } from 'react'; //passo 1 - importando da biblioteca do real
import "./App.css";

class App extends Component { // passo 2 - criando um componente de class

  state = {
    turma: [
      {
       nome: "Danilo",
       idade: 25
    },
      {
       nome: "Luccas",
       idade: 22
    }
    ]
  }

  render(){ //passo 3 - criando a nossa renderização na tela
    return(
      <main> 

      <h1>Vamos começar com state</h1>
      
      <ul className='lista'>
        <li>{this.state.turma[0].nome}</li>
        <li>{this.state.turma[0].idade}</li>
      </ul>

      <ul className='lista'>
        <li>{this.state.turma[1].nome}</li>
        <li>{this.state.turma[1].idade}</li>
      </ul>

      </main>
    )
  }

}

export default App;