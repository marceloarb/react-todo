import React from 'react';

const Task = (props)=>{
    const { task, setList, index, list}=props;
    // console.log(setList);
    const onDelete = ()=>{
        setList(()=>{
            //We are checking the index of the list and if it is different from the value we are passing in, we are going to return.On other words we are taking the value(index) that we want.
            return list.filter(task => list.indexOf(task) !== index);
            
        });
    };
    
    
    const onChange = e =>{
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    }

    return(
        <div className="container bg-secondary">
            <h4>{task.name}</h4>
            <div className="container">
                <input onChange={onChange} checked={task.isComplete} className="btn btn-primary" type="checkbox"/>
                <button onClick={onDelete} className="btn btn-sm btn-danger">Delete</button>
            </div>
            
        </div>
    )
}
export default Task;