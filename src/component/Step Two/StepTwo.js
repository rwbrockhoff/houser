import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';



export default class StepTwo extends Component {
    constructor(){
        super()

        this.state = {
            imageurl: ''
        }
    }

    
    render(){
        return (
            <div>
               <Link to="/"><button> Cancel </button> </Link>
                <h4> Image URL </h4>

                <input onChange={(e) => this.setState({imageurl: e.target.value})}/>

                 <button> <Link to="/wizard/StepOne"> Previous Step </Link> </button> 
                <button> <Link to="/wizard/StepThree"> Next Step </Link> </button> 
            </div>
        )
    }
}

