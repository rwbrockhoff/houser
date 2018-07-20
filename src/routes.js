import React from 'react';
import {Switch, Route} from 'react-router-dom';

//--Components--//
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
import StepOne from './component/Step One/StepOne';
import StepTwo from './component/Step Two/StepTwo';
import StepThree from './component/Step Three/StepThree';

export default (
 

        <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/wizard/StepOne" component={StepOne}/>
            <Route path="/wizard/StepTwo" component={StepTwo}/>
            <Route path="/wizard/StepThree" component={StepThree}/>
        </Switch>

    )
