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
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';


//-----------//

export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_NAME :
            return Object.assign({}, state, {name: action.payload})
        case UPDATE_ADDRESS :
            return Object.assign({}, state, {address: action.payload})
         case UPDATE_CITY :
            return Object.assign({}, state, {city: action.payload})
       
        default: 
            return state
    }
}

export function updateName(name){
    return {
        type: UPDATE_NAME,
        payload: name
        }
    }

    export function updateAddress(address){
        return {
            type: UPDATE_ADDRESS,
            payload: address
            }
        }

    export function updateCity(city){
            return {
                type: UPDATE_CITY,
                payload: city
                }
            }








