import React, { Component } from 'react';
import axios from 'axios';
import {Link, Route} from 'react-router-dom';
import routes from '../../routes';
import StepOne from '../Step One/StepOne';
import StepTwo from '../Step Two/StepTwo';
import StepThree from '../Step Three/StepThree';

export default class Wizard extends Component {
    constructor(){
        super()

        
    }
    
    render(){
        return (
            <div>
                <Route path="/wizard/StepOne" component={StepOne}/>
                <Route path="/wizard/StepTwo" component={StepTwo}/>
                <Route path="/wizard/StepThree" component={StepThree}/>
                
                  <Link to="/"><button> Cancel </button> </Link>
               
                  {routes}
            </div>
        )
    }
}