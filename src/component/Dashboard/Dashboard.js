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
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount(){
        axios.get('/api/houses').then( (res) => {
            this.setState({
                houses: res.data
            })
        })
    }

    deleteHouse(id){
        axios.delete(`/api/house/${id}`).then( () => {
          this.componentDidMount()
        })
    }

    render(){
        let arrRender = this.state.houses.map( (e, i) => {

            return (

                <House deleteHouse={this.deleteHouse} houseInfo={e} id ={e.id} key={i}/>
            
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

