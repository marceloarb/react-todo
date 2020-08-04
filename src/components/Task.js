import React from 'react';
import { Button } from 'reactstrap';

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
            <tr>
                <td><input onChange={onChange} checked={task.isComplete}  type="checkbox"/></td>
                <td><h4 ></h4>{task.name}</td>
                <td><Button close  onClick={onDelete}  close />
            </td> 
            </tr>                   
    )
}
export default Task;