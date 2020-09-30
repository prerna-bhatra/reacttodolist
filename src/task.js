import React from 'react';
import './App.css';
import * as axios from 'axios';
class Task extends React.Component
{
  state={ advice:''};
    componentDidMount()
    {
      this.fetchAdvice();
    }
     fetchAdvice=()=>{
      axios.get('https://infinite-chamber-35629.herokuapp.com/list')
      .then((response)=>
      {
       const data=response.data;
       console.log(data);
   
      }).catch((error)=>
      {
        console.log(error)
      })
    }
  render()
  {
    const {data}=this.state;
    return(
     <div className="app">
       <div className="card">
       <h1 className="heading">{data}</h1>
       </div>  
     </div>
     
      )
  }
}


export default Task