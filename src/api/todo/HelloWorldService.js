import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Axios from 'axios';
const HelloWorldService = () => {

    const onClick = () =>{
        return(
            Axios.get('http://localhost:8080/')
            .then(response => console.log(response))
        )
       
        
    }

            
    return(
        <div>
            <Button onClick={onClick}  color="danger" className="btn btn-danger btn-block mt-1 "  >Service</Button> 
        </div>
        
    )
        
    
    
}

export default HelloWorldService;