import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Home.css'
import { useForm } from 'react-hook-form'
import Homedata from './Homedata'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  const [p, setp] = useState('py-1')
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    if (errors === {}) {
      console.log(errors)
    }
    else {
      navigate('/form')
    }
  }




  return (
    <>
      <div className='bg-white bdy w-full'>

        <div className='md:w-3/6 mx-auto px-20 py-10 rounded bg-white drop-shadow-lg '>
          <div className='md:w-6/6 w-4/4  mx-auto flex flex-col  pt-30 py-12'>
            <h1 className='text-center text-blue-400 text-3xl'>Study<span className='text-red-400'>Helpline</span></h1>
            <form onSubmit={handleSubmit(onSubmit)} className='flex mt-10 flex-col' >

              <input placeholder='Name' className='py-2 bg-gray-100 px-2 rounded drop-shadow-lg'
                {...register('name', { required: true })} />
              {errors.name && 'Name is Required'}
              <input placeholder='E-mail' className='mt-8 bg-gray-100 py-2 px-2 rounded drop-shadow-lg' type="email"
                {...register('email', { required: true })} />{errors.email && 'email is Required'}
              <input placeholder='Mobile Number' className='mt-8 bg-gray-100 py-2 px-2 rounded drop-shadow-lg' type="number"
                {...register('number', { required: true })} />
              {errors.number && 'number is Required'}


              <button to='/form' type='submit' className='text-center bg-pink-500 py-2 drop-shadow-lg mt-8 rounded font-bold'>Submit & Get Started</button>
            </form>
            {/* <span className='mt-4 font-bold'><input type="checkbox"  checked={required}/> I accept all <span> Terms & Conditions</span></span> */}
          </div>
        </div>

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