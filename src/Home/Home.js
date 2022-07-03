import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Home.css'

const Home = () => {
  const [required, setRequired] = useState(false)
  const [name, setName] = useState('')
  const [number, setNumber] = useState()
  const [mail, setmail] = useState()
  const [p] = useState("p-1")
  
  
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
    <div className='bg-white bdy w-full'>
    <form  className='w-full  max-h-full  '>
      <div className='md:w-3/6 mx-auto p-20  bg-white drop-shadow-lg '>
        <div className='md:w-6/6 w-4/4  mx-auto flex flex-col  pt-38 py-12'>
            <h2 className='text-center mb-10 font-bold text-3xl'>APPLY NOW</h2>
             <input type="text" value={name} required onChange={(e)=>setName(e.target.value)} className='mb-5 py-2 px-2 rounded drop-shadow-lg' placeholder='Enter Your Name' />
             <input type="text" value={number} required onChange={(e)=>setNumber(e.target.value)} className='mb-5 py-2 px-2 rounded drop-shadow-lg' placeholder='Enter Your Number' />
             <input type="email" value={mail} required onChange={(e)=>{setmail(e.target.value)}} className='mb-5 py-2 px-2 rounded drop-shadow-lg' placeholder='Enter Your Email' />
             <span className='mt-4 font-bold'><input type="checkbox" onClick={()=>{required===false? setRequired(true):setRequired(false)}} checked={required}/> I accept all <span> Terms & Conditions</span></span>
             <Link to='/Form' onClick={Submit} className='text-center bg-red-400 py-2 drop-shadow-lg mt-4 rounded font-bold'>Submit & Get Started</Link>
        </div>
        </div>
    </form>

    </div>
    <div className="w-full flex flex-col pt-8 items-center">
        <h2 className="text-2xl font-bold underline underline-offset-4 text-blue-800">Terms <span className="underline text-red-500">and</span>  Conditions</h2>
        <p className="w-10/12 py-10 tracking-wide font-bold text-sky-600">
          <p className={p}>
        For tutors Registration of Rs.1500 is mandatory.
        </p>
 <p className={p}> The tutor have to submit all the documents like photo ID proof , address proof , two photographs and qualification proof or mail it to delhi@studyhelpline.in OR  mumbai@studyhelpline.in
 </p>

 <p className={p}>  Any change can be done on website and plan without any further notification by the website.
 </p>

 <p className={p}>  We are only the service provider portal regarding home tuitions.
 </p>

  <p className={p}>   We will not responsible for any inconvenience, miss happening by the parents and the tutors.
  </p>

  <p className={p}>  The tutor must accept full responsibility for the price quotes for his services on the website.We don't give any guarantee to provide the classes in fluency to the tutors.
  </p>

  <p className={p}> The commission once collected will not be refundable to tutors.
  </p>
   <p className={p}>
The registration fee will not be refundable if you get any classes in a month.
</p>

 <p className={p}>  The information of inquiry on website will not be provided to offline registered tutors.
 </p> 

 <p className={p}>  The validity of online registration is one year.
 </p>
  <p className={p}>  In case of registration amount refund only 60% of registration amount will be refunded 40% will be deducted as administration charges only when not a single trial is provided within 45 days of registration.
  </p>


  <p className={p}>  Parents are taken the ID Proof from tutor. studyhelpline.in  does not take any responsibility of the tutors.
  </p>
  <p className={p}>  If any issue about the “Service” Please Call on 9582844550
  </p>
  <p className={p}>  If the Payment is on Monthly Basis then 50% Payment to be made in advance by Cash to out Executive.
  </p>
 

  <p className={p}>   If the Payment is on Hourly Basis then Payment to be made on Weekly basis by Cash to out Executive.
  </p>
 

  <p className={p}>  If you make payments to the tutors without the Bill ,it will not be responsible for the particular payment.
  </p>
 

  <p className={p}>  50% commission of the first month’s fee will be charged. in Delhi/Mumbai
  </p>
 

  <p className={p}>  25 % commission will be charged for package based/Short term courses in Delhi/Mumbai
  </p>


  <p className={p}>   10 % commission will be charged for Yearly package in Mumbai
  </p>
 

  <p className={p}>  Payment will be collected by the executives or you can pay it online.No tutor is allowed to take the fee from parents.
  </p>
 

  <p className={p}>  Maximum of two chances will be given to the tutor to prove themselves.
  </p>
 

  <p className={p}>   Future assignments will solely depend on the performance of the tutor.
  </p>


  <p className={p}>      Lady Tutors must take care of herself about her safety while taking the classes as they have to go students home.
  </p>
  <p className={p}>   All Disputes arising out of the transactions between a user and Studyhelpline.in will be subject to the jurisdiction of Courts, Delhi.
  </p>
  <p className={p}>
******************************</p>
        </p>
      </div>
    </>
  
  )
}

export default Home