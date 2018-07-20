import React, { Component } from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            houses: []
        }
    }

    componentDidMount(){
        axios.get('/api/houses').then( (res) => {
            this.setState({
                houses: res.data
            })
        })
    }

    render(){
        let arrRender = this.state.houses.map( (e, i) => {
            return (

                <House houseInfo={e} key={i}/>
            
            )
        })

        return (
            <div>
                
                <Link to="/wizard"> <button> Add New Property </button> </Link>
                {arrRender}

            </div>
        )
    }
}

