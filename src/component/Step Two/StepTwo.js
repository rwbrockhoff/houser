import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateImg} from '../../ducks/reducer';


class StepTwo extends Component {
    constructor(){
        super()
        
       
    }

    
    render(){
        const {updateImg} = this.props
        const {test} = this.props
        
        return (
            <div>
               <Link to="/"><button> Cancel </button> </Link>
                <h4> Image URL </h4>

                <input defaultValue={test}onChange={(e) => updateImg({imageurl: e.target.value})}/>

                 <button> <Link to="/wizard/StepOne"> Previous Step </Link> </button> 
                <button> <Link to="/wizard/StepThree"> Next Step </Link> </button> 
            </div>
        )
    }
}

function mapStateToProps(state){
    const {imgurl} = state
   

    return {
        imgurl
    }
}

export default connect(mapStateToProps, {updateImg})(StepTwo)
