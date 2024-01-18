import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Userlist from './Userlist';
import { useState } from 'react';

function App() {
  const [userlist,setUserlist]=useState([]);
  function adduserhandler(Username,Userage) {
    setUserlist((prevlist)=> {
      return [...prevlist,{name:Username,age:Userage}]

    })

  }
  return (
  <div>
   <Form onaddUser={adduserhandler}/>
   <Userlist users={userlist} />
   </div>
    );
}

export default App;
