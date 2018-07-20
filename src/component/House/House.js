import React from 'react';

export default function House(props){
    return (
        <div>
            
                <p> Property Name: {props.houseInfo.name} </p>
                <p> Address: {props.houseInfo.address} </p>
                <p> City: {props.houseInfo.city}  </p>
                <p> State: {props.houseInfo.state} </p>
                <p> Zip: {props.houseInfo.zip} </p>

                <button> Delete </button>
        </div>
    )
}