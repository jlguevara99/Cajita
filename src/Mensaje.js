import React, { Component } from 'react';

class Mensaje extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault()
    }
    handleInputChange = (event) =>{
        event.preventDefault()
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        const {name} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Nombre: <input type = "text" placeholder="Your Name" name="name" onChange = {this.handleInputChange}></input> <br />
                    <p>Hola {name}</p>
               </form>
            </div>
        )
    }
}


export default Mensaje;