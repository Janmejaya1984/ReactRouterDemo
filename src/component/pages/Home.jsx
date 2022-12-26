import React,{useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'


function Home() {
    const [name,setName] = useState("");
    const navigate = useNavigate();
    const goToContactUs = (event)=>{
        
    console.log("Go To Contacts");
    if(name.toLowerCase()==="admin"){
        navigate('admin');
    }else{
        navigate('user');
    }
   // console.log(event);
     // navigate('contact');
    }
    const setUserName = (event)=>{
       console.log(event.target.value);
       if(event.target.value){
        setName(event.target.value);
       }
    }
  return (
    <div>
        <h1>Home Page</h1>
        <input type="text" placeholder="Enter Your Name" onBlur={setUserName}></input>
        <button onClick={goToContactUs}>Contact US</button>
    </div>
  )
}

export default Home