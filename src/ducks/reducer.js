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
const UPDATE_ST = 'UPDATE_ST';
const UPDATE_ZIP = 'UPDATE_ZIP';
const UPDATE_IMAGE = 'UPDATE_IMAGE';
const UPDATE_MORTGAGE = 'UPDATE_MORTGAGE';
const UPDATE_RENT = 'UPDATE_RENT';


//-----------//

export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_NAME :
            return Object.assign({}, state, {name: action.payload})
        case UPDATE_ADDRESS :
            return Object.assign({}, state, {address: action.payload})
         case UPDATE_CITY :
            return Object.assign({}, state, {city: action.payload})
        case UPDATE_ST :
            return Object.assign({}, state, {st: action.payload})
        case UPDATE_ZIP :
            return Object.assign({}, state, {zip: action.payload})
       case UPDATE_IMAGE :
            return Object.assign({}, state, {imgurl: action.payload})
        case UPDATE_MORTGAGE :
            return Object.assign({}, state, {monthlyMortgageAmount: action.payload})
        case UPDATE_RENT :
            return Object.assign({}, state, {monthlyDesiredRent: action.payload})
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

    export function updateSt(st){
            return {
                type: UPDATE_ST,
                payload: st
                }
            }

     export function updateZip(zip){
            return {
                type: UPDATE_ZIP,
                payload: zip
                }
            }

    export function updateImg(img){
        return {
            type: UPDATE_IMAGE,
            payload: img
        }
    }

    export function updateMortgage(mortgage){
        return {
            type: UPDATE_MORTGAGE,
            payload: mortgage
        }
    }

    export function updateRent(rent){
        return {
            type: UPDATE_RENT,
            payload: rent
        }
    }








