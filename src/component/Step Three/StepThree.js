import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default class StepThree extends Component {
    constructor(){
        super()

        this.state = {
            monthlyMortgageAmount: '',
            monthlyDesiredRent: ''
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
               <Link to="/"><button> Cancel </button> </Link>
                <h4> Monthly Mortgage Amount </h4>

                <input onChange={(e) => this.setState({monthlyMortgageAmount: e.target.value})}/>

                <h4> Desired Monthly Rent </h4>

                <input onChange={(e) => this.setState({monthlyDesiredRent: e.target.value})}/>

               <button> <Link to="/wizard/StepTwo"> Previous Step </Link> </button>
                <button onClick={this.postNewHouse}> Complete </button> 
            </div>
        )
    }
}