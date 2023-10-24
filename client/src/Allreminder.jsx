import React,{useState,useEffect} from "react";
import axios from 'axios'
const Allreminder = () => {
    const [reminderlist,setReminderlist]=useState([])
  useEffect(()=>{
    // const res1 = await res.json()
    // console.log(res)
    record()
  },[reminderlist])
  
  const record =async()=>{
    const res = await axios.get("http://localhost:6002/allreminder")
    setReminderlist(res.data)
  }

  const deletereminder=(id)=>{
axios.delete(`http://localhost:6002/deletereminder/${id}`)
  }
  
  return (
    <div id="carts">   
    {reminderlist.map((data,index)=>{
      return (
        <div className="cart"  key={index}>
        <h3 className='remindme-text'>Remind Me 🙋‍♂️</h3>
        <hr />
        <h1>Time:</h1>
        <p>{String(new Date(data.datetime.toLocaleString(undefined, {timezone:"Asia/Kolkata"})))}</p>
        {/* <p>{data.datetime}</p> */}
        <h1>Medicine Name:</h1>
        <p>{data.medicinename}</p>
        <h3>Caretaker : <span>{data.caretaker}</span></h3>
        <button id="delete"
        onClick={() => deletereminder(data._id)}>Delete</button>
    </div>
      )
    })}
  </div>
  )
}

export default Allreminder