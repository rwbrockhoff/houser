import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {stepOneUpdater} from '../../ducks/reducer';

class StepOne extends Component {
    constructor(){
        super()

        
    }

    
    render(){
        
        return (
            <div>
                <Link to="/"><button> Cancel </button> </Link>
                <h4> Property Name </h4>

                <input onChange={(e) => this.setState({name: e.target.value})}/>

                <h4> Address </h4>

                <input onChange={(e) => this.setState({address: e.target.value})}/>

                <h4 > City </h4> 

                <input onChange={(e) => this.setState({city: e.target.value})}/>

                <h4> State </h4> 

                <input onChange={(e) => this.setState({st: e.target.value})}/>

                <h4> Zip </h4> 

                <input onChange={(e) => this.setState({zip: e.target.value})}/>

                <button onClick={stepOneUpdater}> <Link to="/wizard/StepTwo"> Next Step </Link> </button> 
            </div>
        )
    }
    
}

function mapStateToProps(state){
    const {name, address, city, st, zip} = state
}

export default connect(mapStateToProps, {stepOneUpdater})(StepOne)

