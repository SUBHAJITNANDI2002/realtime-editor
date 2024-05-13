import React, { useState } from 'react'
import Client from '../components/Client';
import EditorPage from '../components/EditorPage';


const Editor = () => {
  const [clients,setClients]=useState([{socketId:1,username:'Rakesh k'},
  {socketId:2,username:'John Doe'}
]);
  return (
    <div className='mainWrap'>
      <div className='aside'>
       <div className='asideInner'>
        <div className='logo'>
          <img className='logoImage' src="/code-sync.png" alt="logo" />
        </div>
        <h3>Connected</h3>
        <div className='clientsList'>
          { clients.map((client)=>(
              <Client key={client.socketId} username={client.username}/>
          ))
          }

        </div>

       </div>
       <button className='btn copyBtn'>Copy Room Id</button>
       <button className='btn leaveBtn'>Leave Room</button>
      </div>
      <div className='editorWrap'>
        <EditorPage/>
      </div>
     
    </div>
  )
}

export default Editor
