import React, {useState,useEffect,useRef} from 'react';
import axios from 'axios';
import ListDiv from './list_div/list_div';




// It is same the other todo just we used array to assign the hooks
const Todo =()=>{
const LastInput= useRef(null);

const [inputText,setInput] =useState('');
const [List,setList]= useState([]);

const inputHandler =(e)=>{
    setInput(e.target.value)
};

const AddingHandler = ()=>{
    if(typeof(inputText)=='string'&&inputText!==""){
        axios.post('https://react-hook-59b2d.firebaseio.com/data.json',{name:inputText})
        .then(re=>{
            const newList=List.concat({id:re.data.name,name:inputText});
            setList(newList);
        })
        .catch((e)=>{
            console.log(e);
        })

    }else{
        return null
    }
};

const deleteHandler = (id)=>{
    axios.delete(`https://react-hook-59b2d.firebaseio.com/data/${id}.json`)
    .then(re=>{
        const nList =List.filter(el=>{
           return el.id!==id
        });
        setList(nList)
        
    })
    .catch((e)=>{
        console.log(e);
    })
}

useEffect(()=>{
    LastInput.current.focus();
    const todo=[];
    axios.get('https://react-hook-59b2d.firebaseio.com/data.json')
    .then(res=>{
        for(const key in res.data){
            todo.push({id:key,name:res.data[key].name})
        };
        setList(todo);        
    })
   

},[]);

    return (
        <React.Fragment>
            <div>
                <input type="text" value={inputText} onChange={inputHandler} placeholder="Write you name" style={{width:"30%"}} />
                <input ref={LastInput} type="button" value="Add" onClick={AddingHandler}/>
            </div>
            <div className="container">
                {List.map((el)=>< ListDiv  delete={()=>deleteHandler(el.id)} key={el.id} name={el.name.toUpperCase()}/>)}
           </div>
        </React.Fragment>
        )
};


export default Todo;