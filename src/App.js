import React, { useState } from 'react';
import Input from './components/Input'
import Task from './components/Task'
import './App.css';
import { Button } from 'reactstrap';
import HelloWorldService from './api/todo/HelloWorldService'

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="jumbotron" style={{minHeight:"60rem"}}>
      
    <div className="App container w-50 mt-3 "  >
      <h1>Todos List</h1>
      <table className="table table-dark">
            <tr>
                <th scope="col">Done</th>
                <th scope="col">Task</th>
                <th scope="col">Delete</th>
            </tr>{list.map((task, idx)=>(
        <Task key={idx} task={task} setList={setList} index={idx} list={list}/>
      ))}
      </table>
      
      
      <Input list={list} setList={setList} />
        <HelloWorldService></HelloWorldService>
    </div>
    </div>
  );
};
  

export default App;
