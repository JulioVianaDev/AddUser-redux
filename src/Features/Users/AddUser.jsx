import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import { addUser } from './UserSlice'
import { v4 as uuidv4 } from 'uuid';
function AddUser() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [values,setValues] = useState({
    name:'',
    email:''
  })

  function handleSubmit(){
    setValues({name:'',email:''})
    dispatch(addUser({
      id: uuidv4(),
      name: values.name,
      email: values.email,
    }))
    navigate('/')
  }
  return (
    <div className='mt-10 max-w-xl mx-auto'>
      <TextField
        label="Name"
        onChange={(e)=>setValues({...values,name: e.target.value})}
        value={values.name}
        inputProps={{type: "text", placeholder: "Tomate"}}
      />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e)=>setValues({...values,email: e.target.value})}
        inputProps={{type: "email", placeholder: "Tomate@gmail.com"}}
      />

      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  )
}

export default AddUser