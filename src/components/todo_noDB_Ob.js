import React, {useState} from 'react';

// Here we used Just one State and it is not reccomended!!
const Todo =()=>{

const[states,setstates] =useState({input:'',list:[]});


const inputHandler =(e)=>{
    setstates({...states,input:e.target.value})
};
const AddingHandler = ()=>{
    setstates({...states,list:states.list.concat(states.input)})
};


    return (
            <div>
                <input type="text" value={states.input} onChange={inputHandler} />
                <input type="button" value="Add" onClick={AddingHandler}/>
                <hr/>
                <ul>
                    {states.list.map((el)=><li key={Math.random()}>{el}</li>)}
                </ul>

            </div>
            )
};


export default Todo;