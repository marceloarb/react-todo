import React ,{useState}from 'react';

const Input = (props)=>{
    const {list,setList} = props;
    let task = {
        name:"",
        isComplete: false
    }
    const onChange = (e)=>{
        task.name = e.target.value;
        
        
    }
    const onClick = (e)=>{
        setList([...list, task]);
        e.target.value="";
        task = "";
        document.getElementById("reset").focus();
        document.getElementById("reset").value = "";
    }
    const onDelete = ()=>{
        setList(()=>{
            return list.filter(task => list === task);
        });
    }

    
    return(
        <div className="container w-50 mt-3">
            
            <input id="reset" type="text"  className="form-control" onChange={onChange}  name="task"/>
            <button onClick={onClick} className="btn btn-primary btn-block mt-1">Submit</button>
            <button onClick={onDelete}  className="btn btn-danger btn-block mt-1" >Delete</button>
            
        </div>
    );
};



export default Input;