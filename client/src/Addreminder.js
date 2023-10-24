import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Home from './Navbar'
import {useNavigate} from 'react-router-dom'

const Reminderpage=()=>{
  const navigate = useNavigate()
  const [data, setData] = useState({
    medicinename: "",
    datetime: "",
    caretaker: "",
    caretakeremail: ""
  })
  const adddata = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    setData({

      ...data,
      [name]: value

    })
  }
  const submit = async (e) => {
    e.preventDefault()
    const res = await axios.post("http://localhost:6002/addreminder", data)
    // console.log(res)
    if(res.status==200){
      alert("Remind added")
      navigate("/")
    }else{
      alert("Something wrong")
    }
  }
    return (
      <>
      <div className="add-reminder-page">
        <form action="">
          <p>Medicine Name:</p>
          <input type="text" name="medicinename" onChange={adddata} />
          <p>Date & Time:</p>

          <input type="datetime-local" name="datetime" id="" onChange={adddata} />

          <p>Caretaker Name (optional):</p>
          <input type="text" name="caretaker" onChange={adddata} />
          <p>Care taker email address:</p>
          <input type="email" name="caretakeremail" onChange={adddata} />
          <button className='submit-btn' onClick={submit}>Add Remind</button>
        </form>
      </div>
      </>
    )
}

export default Reminderpage;