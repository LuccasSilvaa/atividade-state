import React, { Component } from 'react'; //passo 1 - importando da biblioteca do real
import "./Header.css";

class Header extends Component { // passo 1 - criando um componente de class


  render(){ //passo 3 - criando a nossa renderização na tela
    return(
      <section> 

      <h1>Seja Bem vindo</h1>
      

      <ul>
        <li>selecionar
        </li>
        <li>sobre</li>
      </ul>

      </section>
    )
  }

}

export default Header;