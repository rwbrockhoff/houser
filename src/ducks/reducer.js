const initialState = {
//--Step One---//
        name: '',
        address: '', 
        city: '', 
        st: '',
        zip: null,

//---Step Two---//
        imgurl: '', 
//---Step Three---//

        monthlyMortgageAmount: '',
        monthlyDesiredRent: ''
}

//---constants----//
const UPDATE_STEP_ONE = 'UPDATE_STEP_ONE';
const UPDATE_STEP_TWO = 'UPDATE_STEP_TWO';
const UPDATE_STEP_THREE = 'UPDATE_STEP_THREE';


//-----------//

export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_STEP_ONE :
            state = { ...state, ...action.payload};
            return {
                state
            }
        case UPDATE_STEP_TWO :
            state = { ...state, ...action.payload};
            return {
                state
            }
        case UPDATE_STEP_THREE :
            state = { ...state, ...action.payload};
            return {
                state
            }
       
        default: 
            return state
    }
}

export function stepOneUpdater(name, address, city, st, zip){
    return {
        type: UPDATE_STEP_ONE,
        payload: {
            name: name,
            address: address,
            city: city,
            st: st,
            zip: zip
        }
    }
}

export function stepTwoUpdater(imgurl){
    return {
        type: UPDATE_STEP_TWO,
        payload: {
            imgurl: imgurl
        }
    }
}

export function stepThreeUpdater(monthlyMortgageAmount, monthlyDesiredRent){
    return {
        type: UPDATE_STEP_THREE,
        payload: {
            monthlyMortgageAmount: monthlyMortgageAmount,
            monthlyDesiredRent: monthlyDesiredRent
        }
    }
}




