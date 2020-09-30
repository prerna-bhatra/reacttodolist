import React from 'react';
import './App.css';
import * as axios from 'axios';
class Task extends React.Component
{
  state={ name:'',task:'',exp:''};
    componentDidMount()
    {
      this.fetchtask();
    }
     fetchtask=()=>{
      axios.get('https://infinite-chamber-35629.herokuapp.com/list')
      .then((response)=>
      {

       const name=response.data[0].name;
        const task=response.data[0].task;
        const exp=response.data[0].dur;
        console.log(response.data)
        console.log(name);
        console.log(task);
        console.log(exp);
		 this.setState({name:name})
		 this.setState({task:task})
		 this.setState({exp:exp})
   
      }).catch((error)=>
      {
        console.log(error)
      })
    }
  render()
  {
    const {name}=this.state;
    const {task}=this.state;
     const {exp}=this.state;
    return(
     <div className="app">
       <div className="card">
       <h1 className="heading">Name:{name}</h1>
       <h1 className="heading">Task:{task}</h1>
       <h1 className="heading">Expires on:{exp}</h1>
       </div>  
     </div>
     
      )
  }
}


export default Task