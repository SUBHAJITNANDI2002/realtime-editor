import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate=useNavigate();
  const [roomId,setRoomId]=useState('');
  const [username,setUsername]=useState('');

  const createNewRoom=(e)=>{
    e.preventDefault();
    const id=uuidv4();
    setRoomId(id);
   toast.success("Created new room");

    

  }
  const joinRoom=(e)=>{
    if(!roomId || !username){
      toast.error('ROOM ID & username is required');
      return ;
    }
    // redirect
    navigate(`/editor/${roomId}`,{
      state:{
        username
      }
    })
    
  }
  const handleInputEnter=(e)=>{
    if(e.code==='Enter'){
      joinRoom();
    }
  }
  return (
    <div className='homePagewarpper'>
        <div className="formWrapper">
            <img className='homePageLogo' src="/code-sync.png" alt="code-sync-logo" />
            <h4 className="mainLabel">Paste Invitation Room Id</h4>
            <div className="inputGroup">
              <input type="text" className='inputBox' placeholder='ROOM ID' onChange={(e)=>setRoomId(e.target.value)} value={roomId} onKeyUp={handleInputEnter} />
              <input type="text" className='inputBox' placeholder='USERNAME' onChange={(e)=>setUsername(e.target.value)} value={username} onKeyUp={handleInputEnter}/>
              <button className='btn joinBtn' onClick={joinRoom}>JOIN</button>
              <span className='createInfo'>
                If You Don't Have An Invite Then Create &nbsp;
                <a onClick={createNewRoom} href="" className='createNewBtn'>New Room</a>
               
                       

              </span>
            </div>

            
        </div>
        <footer>
          <h4>Build By 💛
            <a href="https://github.com/SUBHAJITNANDI2002">Subhajit Nandi </a>
            </h4>
        </footer>
     
    </div>
  )
}

export default Home
