import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Home = () => {
  const [required, setRequired] = useState(false)
  const [name, setName] = useState('')
  const [number, setNumber] = useState()
  const [mail, setmail] = useState()
  
  
  const User = [
    {name:'',
     number:'',
     email:'' }
  ]
  
  const Submit = (e)=>{
    if(required===true){
    let user = [...User]
      user[0].name = name
      user[0].number = number
      user[0].email = mail
      console.log(User)

      }
    else{
      e.preventDefault();
      alert('please check the T & C')
    }}

  


  return (
    <>
    <div>
    <form  className='w-full bg-red-200 h-screen'>
        <div className='md:w-1/4 w-3/4 h-screen mx-auto flex flex-col pt-28'>
            <h2 className='text-center mb-10 font-bold text-3xl'>APPLY NOW</h2>
             <input type="text" value={name} required onChange={(e)=>setName(e.target.value)} className='mb-5 py-2 px-2 rounded drop-shadow-lg' placeholder='Enter Your Name' />
             <input type="text" value={number} required onChange={(e)=>setNumber(e.target.value)} className='mb-5 py-2 px-2 rounded drop-shadow-lg' placeholder='Enter Your Number' />
             <input type="email" value={mail} required onChange={(e)=>{setmail(e.target.value)}} className='mb-5 py-2 px-2 rounded drop-shadow-lg' placeholder='Enter Your Email' />
             <span className='mt-4 font-bold'><input type="checkbox" onClick={()=>{required===false? setRequired(true):setRequired(false)}} checked={required}/> I accept all <span> Terms & Conditions</span></span>
             <Link to='/Form' onClick={Submit} className='text-center bg-red-400 py-2 drop-shadow-lg mt-4 rounded font-bold'>Submit & Get Started</Link>
        </div>
    </form>

    </div>
    </>
  
  )
}

export default Home