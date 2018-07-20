import React, { Component } from 'react';
import axios from 'axios';


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

    postNewHouse =() =>{
        let name = this.state.name
        let address = this.state.address
        let city = this.state.city
        let state = this.state.state
        let zip = this.state.zip

        axios.post('/api/house', 
        {
            name: name,
            address: address,
            city: city,
            state: state,
            zip: zip
        } ).then( (res) => {
            console.log('received new house')
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