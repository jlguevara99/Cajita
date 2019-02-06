import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tipo: 'Perro',
            nombre: ' ',
            genero: ' ',
            edad: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert('Su mascota es: ' + this.state.tipo + " " + this.state.nombre + " " + this.state.genero + " " + this.state.edad);
        event.preventDefault();
    }

    render() {
        const {nombre} = this.state.nombre
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Tipo:
                        <select tipo={this.state.tipo} onChange={this.handleChange}>
                            <option tipo="Perro">Perro</option>
                            <option tipo="Gato">Gato</option>
                            <option tipo="Conejo">Conejo</option>
                            <option tipo="Rana">Rana</option>
                        </select>
                    </label>
                    <p>Nombre: <input type = "text" name='nombre' onChange={this.handleChange}></input></p>
                    <p>Genero: <input type = "text" name ='genero' onChange={this.handleChange}></input></p>
                    <p>Edad: <input type = "text" name ='edad' onChange={this.handleChange}></input></p>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Form;