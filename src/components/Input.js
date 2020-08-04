import React ,{useState}from 'react';
import { Button } from 'reactstrap';
import './components.css';


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
        alert("Are you sure you want to delete all the tasks?")
        setList(()=>{
            return list.filter(task => list === task);
        });
        
    }
    return(
        <div >
            
            
            <input id="reset" type="text" placeholder='New Task' className="form-control" onChange={onChange}  name="task"/>
            
            <Button onClick={onClick}  className="btn btn-secondary btn-block mt-1" >Submit</Button>
            <Button onClick={onDelete}  color="danger" className="btn btn-danger btn-block mt-1 "  >Delete</Button> 
            
            
            
        </div>
    );
};



export default Input;