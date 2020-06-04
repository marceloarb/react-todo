import React, { useState } from 'react';
import Input from './components/Input'
import Task from './components/Task'
import './App.css';

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App container" >
      {list.map((task, idx)=>(
        <Task key={idx} task={task} setList={setList} index={idx} list={list}/>
      ))}
      
      <Input list={list} setList={setList} />
    </div>
  );
}

export default App;
