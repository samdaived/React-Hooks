import React from 'react';
import './list.css';


const ListDiv =(props)=>{

    return (
        <div className="list" onClick={props.delete}>
                <h3>{props.name}</h3>
        </div>
    )
}



export default ListDiv