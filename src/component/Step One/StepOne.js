import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateName, updateAddress, updateCity, updateSt, updateZip} from '../../ducks/reducer';

class StepOne extends Component {
    constructor(){
        super()

        
    }

    
    render(){
        const {updateName, updateAddress, updateCity, updateSt, updateZip} = this.props
       
        return (
            <div>
                <Link to="/"><button> Cancel </button> </Link>
                <h4> Property Name </h4>

                <input onChange={(e) => updateName({name: e.target.value})}/>

                <h4> Address </h4>

                <input onChange={(e) => updateAddress({address: e.target.value})}/>

                <h4 > City </h4> 

                <input onChange={(e) => updateCity({city: e.target.value})}/>

                <h4> State </h4> 

                <input onChange={(e) => updateSt({st: e.target.value})}/>

                <h4> Zip </h4> 

                <input onChange={(e) => updateZip({zip: e.target.value})}/>

                 <button onClick={() => this.mapStateToProps}> <Link to="/wizard/StepTwo"> Next Step </Link> </button> 
            </div>

               
        )
    }
    
}

function mapStateToProps(state){
    const {name, address, city, st, zip} = state
   
    return {
        name,
        address,
        city,
        st,
        zip
    }
}

export default connect(mapStateToProps, {updateName, updateAddress, updateCity, updateSt, updateZip})(StepOne)

