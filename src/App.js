import './App.css';
import { useEffect, useState } from 'react';
import {io} from 'socket.io-client'

function App() {
  const [msg, setMsg] = useState('')
  const [chat, setChat] = useState([])
  const socket = io('http://localhost:5000')

  const sendData = ()=>{
    socket.emit('chat',{msg:msg})
    setMsg('')
  }

  socket.on('connection')
  useEffect(()=>{
    socket.on('chat',(data)=>{
      setChat([...chat, data])
      // console.log(chat);
    })
  })

  return (
    <>
      <h3>Chat App</h3>

      <input type="text" value={msg} onChange={e=>setMsg(e.target.value)} />
      <button onClick={()=>sendData()}>Send</button>
      {chat.map((el,index)=>
        <p key={index}>{el.msg}</p>
      )}
    </>
  );
}

export default App;
