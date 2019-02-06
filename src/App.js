import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mensaje from './Mensaje';
import Form from './Form';

/*function Mensaje(props){
  var element = <h1>hola {props.msg}</h1>
  return element
}*/


class MiComponente extends Component {
  constructor(props){
    super(props)
    this.state = { mensajeIn: this.props.variable }

  }
  render() {
    var mundo="Mundo feliz";
    return (
      <div className="App">
        <Mensaje msg="amigos"/> 

        <Mensaje msg="dos"/>
        
    {/*} <Form></Form>{*/}
      </div>
    );
  }
}

export default MiComponente;
