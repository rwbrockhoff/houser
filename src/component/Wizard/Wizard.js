import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

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

    postNewHouse =() => {
        axios.post('/api/house', 
        {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        } ).then( () => {
            <Redirect to="/"/>
        })
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

                <button onClick={this.postNewHouse}> Complete </button> 
            </div>
        )
    }
}