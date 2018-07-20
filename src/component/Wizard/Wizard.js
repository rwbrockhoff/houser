import React, { Component } from 'react';


export default class Wizard extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            address: '', 
            city: '', 
            state: '',
            zip: null
        }
    }
    render(){
        return (
            <div>
                <h4> Property Name </h4>

                <input onChange={(e) => this.setState({name: e.target.value})}/>

                <h4> Address </h4>

                <input onChange={(e) => this.setState({address: e.target.value})}/>

                <h4 > City </h4> 

                <input onChange={(e) => this.setState({city: e.target.value})}/>

                <h4> State </h4> 

                <input onChange={(e) => this.setState({state: e.target.value})}/>

                <h4> Zip </h4> 

                <input onChange={(e) => this.setState({zip: e.target.value})}/>

                <button> Complete </button> 
            </div>
        )
    }
}