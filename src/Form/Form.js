import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import year from './Data/year'
import Class10 from './Data/Class10/Class10'
import Science from './Data/Science/Science'
import Physics from './Data/Science/Physics'
import Chemistry from './Data/Science/Chemistry'
import Biology from './Data/Science/Biology'
import School from './Data/Maths/School'
import College from './Data/Maths/College'
import Test from './Data/Maths/Test'
import Socialscience from './Data/Socialscience/Socialscience'
import History from './Data/Socialscience/History'
import Geography from './Data/Socialscience/Geography'
import Political from './Data/Socialscience/Political'
import Sociology from './Data/Socialscience/Sociology'
import HomeScience from './Data/Socialscience/HomeScience'
import Philosophy from './Data/Socialscience/Philosophy'
import Psychology from './Data/Socialscience/Psychology'
import Others from './Data/Socialscience/Others'
import English from './Data/Languagess/English'
import Hindi from './Data/Languagess/Hindi'
import International from './Data/Languagess/International'
import Regional from './Data/Languagess/Regional'
import OthersLang from './Data/Languagess/OthersLang'
import Mechnical from './Data/Engineering/Mechnical'
import Civil from './Data/Engineering/Civil'
import Electrical from './Data/Engineering/Electrical'
import Branch from './Data/Engineering/Branch'
import Animation from './Data/Engineering/Animation'
import Architecture from './Data/Engineering/Architecture'
import Programming from './Data/Computer/Programming'
import Software from './Data/Computer/Software'
import Design from './Data/Computer/Design'
import Network from './Data/Computer/Network'
import Economics from './Data/Commerce/Economics'
import Finance from './Data/Commerce/Finance'
import Accounts from './Data/Commerce/Accounts'
import Tax from './Data/Commerce/Tax'
import Law from './Data/Commerce/Law'
import Business from './Data/Commerce/Business'
import Management from './Data/Commerce/Management'
import Music from './Data/Music&Dance/Music'
import Dance from './Data/Music&Dance/Dance'
import Singing from './Data/Music&Dance/Singing'
import Instruments from './Data/Music&Dance/Instruments'
import Film from './Data/Music&Dance/Film'
import RegionalStudies from './Data/RegionalStudies/RegionalStudies'
import VisualArts from './Data/VisualArts/VisualArts'
import Exams from './Data/Testpaper/Exams'
import Govexam from './Data/Testpaper/Govexam'
import Otherexam from './Data/Testpaper/Otherexam'
import Othersub from './Data/Others/Othersub'
import Traning from './Data/Traning/Traning'
import healthwellness from './Data/Health&wellness/healthwellness'
import StatisticsO from './Data/Statistics/StatisticsO'
import Games from './Data/Games/Games'
import { appendErrors } from 'react-hook-form'


const Form = () => {
  const [step, setStep] = useState(1)
  const [location, setLocation] = useState()
  const [progress, setProgress] = useState(20)

  const handleNext = () => {
    setStep(step + 1)
    setProgress(progress + 20)
  }
  const handleBack = () => {
    setStep(step - 1)
    setProgress(progress - 20)
  }

  return (
    <div>
      {step === 1 && (
        <Step1 handleNext={handleNext}
            step={step}
            setStep={setStep}
          location={location}
          setLocation={setLocation}
          progress={progress}
        />
      )}
      {step === 2 && (
        <Step2 handleNext={handleNext}
        step={step}
        setStep={setStep}
          progress={progress}
          handleBack={handleBack}
        />


      )}
      {step === 3 && (
        <Step3 handleNext={handleNext}
          progress={progress}
          step={step}
        setStep={setStep}
          handleBack={handleBack} />
      )}
      {step === 4 && (
        <Step4 handleNext={handleNext}
          progress={progress}
          step={step}
          setStep={setStep}
          handleBack={handleBack} />
      )}
      {step === 5 && (
        <Step5 handleNext={handleNext}
        step={step}
        setStep={setStep}
          progress={progress}
          handleBack={handleBack} />
      )}

    </div>
  )
}

export default Form



const Step1 = (props) => {
  
  const [address , setaddress] = useState('')
  const [pincode, setPincode] = useState()
  const [city, setcity] = useState(false);

  const fetchData = async () => {
    let url = `https://api.postalpincode.in/pincode/${pincode}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData[0].PostOffice)
    setcity(parsedData[0].PostOffice)
    //  setcity(parsedData.PostOffice.Name)

  }
  
  const onClickL = (d) => {
    console.log(d)
    props.setLocation(`${d.name} , ${d.block} , ${d.pincode}`)
    setcity(false)
    console.log(props.location)
  }
  const handleNext = ()=>{
    if(address && props.location){
    props.setStep(props.step+1)
  }
  else{
   console.log('errors')
}
  }
  useEffect(() => {
    fetchData()
  }, [pincode])
  return (
    <>
      <div className='md:w-3/5 w-full mx-auto rounded drop-shadow-lg bg-white mt-5 h-content'>
        {/* Progress Bar */}
        <div className='h-10 w-full'>
          <div className='h-2 w-full bg-gray-300'>
            <div className={`h-2 w-${props.progress} bg-blue-400`}></div>
          </div>

        </div>
        <div className='flex mx-auto w-full  flex-col p-5 '>
          <h1 className='text-center text-2xl'>Where do you stay?</h1>
          <input type="text" value={address} onChange={e=>setaddress(e.target.value)} className='mt-8 py-2 px-2 drop-shadow-lg rounded' placeholder='Address' />

          <input type="text" value={props.location} onChange={(e) => {
            setPincode(e.target.value);
            props.setLocation(e.target.value)
          }
          } className='mt-10 py-2 px-2 drop-shadow-lg rounded' placeholder='Location..' />

          {city ? (
            <>
              <div className='h-40 overflow-x-hidden relative z-10 w-full mt-2 overflow-scroll scroll drop-shadow-lg rounded'>
                {city.map((val, key) => {
                  return (
                    <div onClick={() => {
                      onClickL({
                        name: val.Name,
                        pincode: val.Pincode,
                        block: val.Block
                      })

                    }} className='py-2 w-full px-4 hover:bg-gray-100 mt-1 hover:cursor-pointer'>
                      <h1> {val.Name} </h1>
                      <h1> {val.Block} </h1>
                      <h1> {val.Pincode} </h1>
                    </div>
                  )

                })}  </div>


            </>
          ) :
            <></>}



          <h3 className='text-center mt-20'>We need it to match you with students from near by your Area.</h3>
        </div>
        <div className='mt-16 flex justify-between p-6'>
          <button className='bg-blue-500 text-white rounded p-2'>	&larr; Back</button>
          <button className='bg-blue-500 text-white rounded p-2' onClick={handleNext}> Next &rarr;</button>
        </div>
      </div>
    </>

  )

}


const Step2 = (props) => {
  //    const [userdata, setUserdata] = useState({gender:'',year:''})

  const userdata = {
    gender:'',
    year:''
  }
  const handleChange = (e) => {
    const { value } = e.target
    console.log(value)
    userdata.gender = value
    console.log(userdata)
  }
  const handleChangeYear = (e) => {
    userdata.year = e.target.value
    console.log(userdata)


  }
  const handleNext = ()=>{
    if(userdata.gender.length>=4 && userdata.year.length==4){
      props.setStep(props.step+1)
    }
    else{
      console.log('error')
    }
  }



  return (
    <>
      <div className='md:w-3/5 w-full mx-auto rounded drop-shadow-lg bg-white mt-5 h-content'>
        {/* Progress Bar */}
        <div className='h-10 w-full'>
          <div className='h-2 w-full bg-gray-300'>
            <div className={`h-2 w-${props.progress} bg-blue-400`}></div>
          </div>

        </div>

        <div className='flex flex-col p-5 md:pb-40 pb-32 '>
          <h1 className='text-xl font-bold flex md:flex-row flex-col'>Select Your Gender <label className='font-light md:pl-8 pl-2 md:pt-0 pt-2'><input type="radio" className='' name='gender' id='Male' value="Male" onChange={handleChange} /> Male</label>
            <label className='px-2 md:pt-0 pt-2 font-light'><input type="radio" name='gender' onChange={handleChange} id='Female' value="Female" /> Female</label>  </h1>

          <label htmlFor="year" className='mt-8 text-xl py-2'>Which year did you start teaching?</label>
          <select name="years" placeholder='select' onChange={handleChangeYear} className='rounded drop-shadow py-2 px-2' id="years">
            {year.map((val, key) => {
              return (
                <option value={val.year} placeholder='vale' >{val.year}</option>
              )
            })}
          </select>


        </div>
        <div className='mt-16 flex justify-between p-6'>
          <button className='bg-blue-500 text-white rounded p-2' onClick={props.handleBack} >	&larr; Back</button>
          <button className='bg-blue-500 text-white rounded p-2' onClick={handleNext}> Next &rarr;</button>
        </div>
      </div>

    </>

  )


}


const Step3 = (props) => {
  const [isChecked, setIsChecked] = useState(false)

  const subjects = [{ name: "" }]
  const handleChangeSubjects = (subject, key) => {
    var obj = {}

    obj[key] = 

    subjects.push(obj)
  }

  useEffect(() => {
    console.log(subjects)
  }, [subjects])


  return (
    <>
      <div className='md:w-3/5 w-full mx-auto mt-5 rounded drop-shadow-lg bg-white h-content'>
        {/* Progress bar */}
        <div className='h-10 w-full'>
          <div className='h-2 w-full bg-gray-300'>
            <div className={`h-2 w-${props.progress} bg-blue-400`}></div>
          </div>
        </div>
        <div className='w-full'>
          <div className="p-4 mx-auto accordion" id="accordionExample">
            <div className="accordion-item bg-white border-gray-200">
              <h2 className="accordion-header mb-0" id="headingOne">
                <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                  aria-controls="collapseOne">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Combo Subjects KG to 10th
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div className="accordion-body py-4 px-5 grid grid-cols-2">
                  {Class10.map((val, key) => {
                    return (<>

                      <label>
                        <input type='checkbox' onChange={() => { handleChangeSubjects(val, key) }} className='mr-1' value={val.name} />
                        {val.name} </label>
                    </>)
                  })}
                </div>
              </div>
            </div>
            <div className="accordion-item bg-white">
              <h2 className="accordion-header mb-0" id="headingTwo">
                <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                  aria-controls="collapseTwo">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Science Subjects
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample">
                <div className="accordion-body py-4 px-5">
                  {/* First */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingTwo">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesubTwo" aria-expanded="false"
                        aria-controls="collapsesubTwo">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Science
                      </button>
                    </h2>
                    <div id="collapsesubTwo" className="accordion-collapse collapse" aria-labelledby="headingsubTwo"
                      data-bs-parent="#accordionsubExample">
                      <div className="accordion-body py-4 grid grid-cols-2 px-5">
                        {Science.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Second */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingsub1Two">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub1Two" aria-expanded="false"
                        aria-controls="collapsesub1Two">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Physics
                      </button>
                    </h2>
                    <div id="collapsesub1Two" className="accordion-collapse collapse" aria-labelledby="headingsub1Two"
                      data-bs-parent="#accordionsub1Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Physics.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}

                      </div>
                    </div>
                  </div>
                  {/* Third  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingsub2Two">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub2Two" aria-expanded="false"
                        aria-controls="collapsesub2Two">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Chemistry
                      </button>
                    </h2>
                    <div id="collapsesub2Two" className="accordion-collapse collapse" aria-labelledby="headingsub2Two"
                      data-bs-parent="#accordionsub2Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Chemistry.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}

                      </div>
                    </div>
                  </div>

                  {/* Four  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingsub3Two">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub3Two" aria-expanded="false"
                        aria-controls="collapsesub3Two">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Biology
                      </button>
                    </h2>
                    <div id="collapsesub3Two" className="accordion-collapse collapse" aria-labelledby="headingsub3Two"
                      data-bs-parent="#accordionsub3Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Biology.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}


                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
            <div className="accordion-item bg-white">
              <h2 className="accordion-header mb-0" id="headingThree">
                <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                  aria-controls="collapseThree">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Maths
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                data-bs-parent="#accordionExample">
                <div className="accordion-body py-4 px-5">
                  {/* First  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingThree">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesubThree" aria-expanded="false"
                        aria-controls="collapsesubThree">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        School Level
                      </button>
                    </h2>
                    <div id="collapsesubThree" className="accordion-collapse collapse" aria-labelledby="headingsubThree"
                      data-bs-parent="#accordionsubExample">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {School.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Second */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingThree">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub1Three" aria-expanded="false"
                        aria-controls="collapsesub1Three">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        College Level
                      </button>
                    </h2>
                    <div id="collapsesub1Three" className="accordion-collapse collapse" aria-labelledby="headingsub1Three"
                      data-bs-parent="#accordionsub1Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {College.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Third  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingThree">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub2Three" aria-expanded="false"
                        aria-controls="collapsesub2Three">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Test Paper
                      </button>
                    </h2>
                    <div id="collapsesub2Three" className="accordion-collapse collapse" aria-labelledby="headingsub2Three"
                      data-bs-parent="#accordionsub2Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Test.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>


            <div className="accordion-item bg-white">
              <h2 className="accordion-header mb-0" id="headingFour">
                <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                  aria-controls="collapseFour">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Social Studies
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                data-bs-parent="#accordionExample">
                <div className="accordion-body grid grid-cols-2 py-4 px-5">
                  {Socialscience.map((val, key) => {
                    return (
                      <label>
                        <input type='checkbox' className='mr-1' value={val.name} />
                        {val.name} </label>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="accordion-item bg-white">
              <h2 className="accordion-header mb-0" id="headingFive">
                <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                  aria-controls="collapseFive">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Social Science & Humanities
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                data-bs-parent="#accordionExample">
                <div className="accordion-body py-4 px-5">

                  {/* First */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingFive">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesubFive" aria-expanded="false"
                        aria-controls="collapsesubFive">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        History
                      </button>
                    </h2>
                    <div id="collapsesubFive" className="accordion-collapse collapse" aria-labelledby="headingsubFive"
                      data-bs-parent="#accordionsubExample">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {History.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}

                      </div>
                    </div>
                  </div>

                  {/* Second  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingFive">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub1Five" aria-expanded="false"
                        aria-controls="collapsesub1Five">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Geography
                      </button>
                    </h2>
                    <div id="collapsesub1Five" className="accordion-collapse collapse" aria-labelledby="headingsub1Five"
                      data-bs-parent="#accordionsub1Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Geography.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}

                      </div>
                    </div>
                  </div>

                  {/* Third  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingFive">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub2Five" aria-expanded="false"
                        aria-controls="collapsesub2Five">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Political Science
                      </button>
                    </h2>
                    <div id="collapsesub2Five" className="accordion-collapse collapse" aria-labelledby="headingsub2Five"
                      data-bs-parent="#accordionsub2Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Political.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}

                      </div>
                    </div>
                  </div>

                  {/* Four  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingFive">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub3Five" aria-expanded="false"
                        aria-controls="collapsesub3Five">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Sociology
                      </button>
                    </h2>
                    <div id="collapsesub3Five" className="accordion-collapse collapse" aria-labelledby="headingsub3Five"
                      data-bs-parent="#accordionsub3Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Sociology.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}

                      </div>
                    </div>
                  </div>

                  {/* Five  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingFive">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub4Five" aria-expanded="false"
                        aria-controls="collapsesub4Five">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Home Science
                      </button>
                    </h2>
                    <div id="collapsesub4Five" className="accordion-collapse collapse" aria-labelledby="headingsub4Five"
                      data-bs-parent="#accordionsub4Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {HomeScience.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}

                      </div>
                    </div>
                  </div>

                  {/* Six  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingFive">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub5Five" aria-expanded="false"
                        aria-controls="collapsesub5Five">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Philosophy
                      </button>
                    </h2>
                    <div id="collapsesub5Five" className="accordion-collapse collapse" aria-labelledby="headingsub5Five"
                      data-bs-parent="#accordionsub5Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Philosophy.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}

                      </div>
                    </div>
                  </div>

                  {/* Seven  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingFive">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub6Five" aria-expanded="false"
                        aria-controls="collapsesub6Five">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Psychology
                      </button>
                    </h2>
                    <div id="collapsesub6Five" className="accordion-collapse collapse" aria-labelledby="headingsub6Five"
                      data-bs-parent="#accordionsub6Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Psychology.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}


                      </div>
                    </div>
                  </div>

                  {/* Eight  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingFive">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub7Five" aria-expanded="false"
                        aria-controls="collapsesub7Five">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Other Subjects
                      </button>
                    </h2>
                    <div id="collapsesub7Five" className="accordion-collapse collapse" aria-labelledby="headingsub7Five"
                      data-bs-parent="#accordionsub7Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Others.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}

                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>

            <div className="accordion-item bg-white">
              <h2 className="accordion-header mb-0" id="headingSix">
                <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                  aria-controls="collapseSix">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Languages
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                data-bs-parent="#accordionExample">
                <div className="accordion-body py-4 px-5">

                  {/* First  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingSix">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesubSix" aria-expanded="false"
                        aria-controls="collapsesubSix">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        English
                      </button>
                    </h2>
                    <div id="collapsesubSix" className="accordion-collapse collapse" aria-labelledby="headingsubSix"
                      data-bs-parent="#accordionsubExample">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {English.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}

                      </div>
                    </div>
                  </div>

                  {/* Second   */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingSix">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub1Six" aria-expanded="false"
                        aria-controls="collapsesub1Six">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Hindi & Sanskrit
                      </button>
                    </h2>
                    <div id="collapsesub1Six" className="accordion-collapse collapse" aria-labelledby="headingsub1Six"
                      data-bs-parent="#accordionsub1Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Hindi.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}

                      </div>
                    </div>
                  </div>

                  {/* Third  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingSix">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub2Six" aria-expanded="false"
                        aria-controls="collapsesub2Six">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        International
                      </button>
                    </h2>
                    <div id="collapsesub2Six" className="accordion-collapse collapse" aria-labelledby="headingsub2Six"
                      data-bs-parent="#accordionsub2Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {International.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}

                      </div>
                    </div>
                  </div>

                  {/* Four  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingSix">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub3Six" aria-expanded="false"
                        aria-controls="collapsesub3Six">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Indian Regional
                      </button>
                    </h2>
                    <div id="collapsesub3Six" className="accordion-collapse collapse" aria-labelledby="headingsub3Six"
                      data-bs-parent="#accordionsub3Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Regional.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Five  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingSix">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub4Six" aria-expanded="false"
                        aria-controls="collapsesub4Six">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Others
                      </button>
                    </h2>
                    <div id="collapsesub4Six" className="accordion-collapse collapse" aria-labelledby="headingsub4Six"
                      data-bs-parent="#accordionsub4Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {OthersLang.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>


            <div className="accordion-item bg-white">
              <h2 className="accordion-header mb-0" id="headingSeven">
                <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false"
                  aria-controls="collapseSeven">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Engineering
                </button>
              </h2>
              <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven"
                data-bs-parent="#accordionExample">
                <div className="accordion-body py-4 px-5">

                  {/* First  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingSeven">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesubSeven" aria-expanded="false"
                        aria-controls="collapsesubSeven">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Mechanical
                      </button>
                    </h2>
                    <div id="collapsesubSeven" className="accordion-collapse collapse" aria-labelledby="headingsubSeven"
                      data-bs-parent="#accordionsubExample">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Mechnical.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Second  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingSeven">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub1Seven" aria-expanded="false"
                        aria-controls="collapsesub1Seven">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Civil
                      </button>
                    </h2>
                    <div id="collapsesub1Seven" className="accordion-collapse collapse" aria-labelledby="headingsub1Seven"
                      data-bs-parent="#accordionsub1Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Civil.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Third  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingSeven">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub2Seven" aria-expanded="false"
                        aria-controls="collapsesub2Seven">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Electronics/Electrical/Communication
                      </button>
                    </h2>
                    <div id="collapsesub2Seven" className="accordion-collapse collapse" aria-labelledby="headingsub2Seven"
                      data-bs-parent="#accordionsub2Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Electrical.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Four  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingSeven">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub3Seven" aria-expanded="false"
                        aria-controls="collapsesub3Seven">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Other Branches
                      </button>
                    </h2>
                    <div id="collapsesub3Seven" className="accordion-collapse collapse" aria-labelledby="headingsub3Seven"
                      data-bs-parent="#accordionsub3Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Branch.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Five  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingSeven">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub4Seven" aria-expanded="false"
                        aria-controls="collapsesub4Seven">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Designing & Animation
                      </button>
                    </h2>
                    <div id="collapsesub4Seven" className="accordion-collapse collapse" aria-labelledby="headingsub4Seven"
                      data-bs-parent="#accordionsub4Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Animation.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Six  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingSeven">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub5Seven" aria-expanded="false"
                        aria-controls="collapsesub5Seven">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Architecture
                      </button>
                    </h2>
                    <div id="collapsesub5Seven" className="accordion-collapse collapse" aria-labelledby="headingsub5Seven"
                      data-bs-parent="#accordionsub5Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Architecture.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>



                </div>
              </div>
            </div>

            <div className="accordion-item bg-white">
              <h2 className="accordion-header mb-0" id="headingEight">
                <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false"
                  aria-controls="collapseEight">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Computer & IT
                </button>
              </h2>
              <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight"
                data-bs-parent="#accordionExample">
                <div className="accordion-body py-4 px-5">

                  {/* First  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingEight">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesubEight" aria-expanded="false"
                        aria-controls="collapsesubEight">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Application Softwares
                      </button>
                    </h2>
                    <div id="collapsesubEight" className="accordion-collapse collapse" aria-labelledby="headingsubEight"
                      data-bs-parent="#accordionsubExample">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Programming.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Second  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingEight">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub1Eight" aria-expanded="false"
                        aria-controls="collapsesub1Eight">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Programming
                      </button>
                    </h2>
                    <div id="collapsesub1Eight" className="accordion-collapse collapse" aria-labelledby="headingsub1Eight"
                      data-bs-parent="#accordionsub1Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Software.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Third  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingEight">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub2Eight" aria-expanded="false"
                        aria-controls="collapsesub2Eight">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Designing & Animation
                      </button>
                    </h2>
                    <div id="collapsesub2Eight" className="accordion-collapse collapse" aria-labelledby="headingsub2Eight"
                      data-bs-parent="#accordionsub2Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Design.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Four  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingEight">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub3Eight" aria-expanded="false"
                        aria-controls="collapsesub3Eight">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Networks & Security
                      </button>
                    </h2>
                    <div id="collapsesub3Eight" className="accordion-collapse collapse" aria-labelledby="headingsub3Eight"
                      data-bs-parent="#accordionsub3Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Network.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>

            <div className="accordion-item bg-white">
              <h2 className="accordion-header mb-0" id="headingNine">
                <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false"
                  aria-controls="collapseNine">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Commerce
                </button>
              </h2>
              <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine"
                data-bs-parent="#accordionExample">
                <div className="accordion-body py-4 px-5">

                  {/* first  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingNine">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesubNine" aria-expanded="false"
                        aria-controls="collapsesubNine">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Economics
                      </button>
                    </h2>
                    <div id="collapsesubNine" className="accordion-collapse collapse" aria-labelledby="headingsubNine"
                      data-bs-parent="#accordionsubExample">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Economics.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>)
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Second  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingNine">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub1Nine" aria-expanded="false"
                        aria-controls="collapsesub1Nine">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Finance & Accounting
                      </button>
                    </h2>
                    <div id="collapsesub1Nine" className="accordion-collapse collapse" aria-labelledby="headingsub1Nine"
                      data-bs-parent="#accordionsub1Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Finance.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Third  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingNine">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub2Nine" aria-expanded="false"
                        aria-controls="collapsesub2Nine">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Accounts
                      </button>
                    </h2>
                    <div id="collapsesub2Nine" className="accordion-collapse collapse" aria-labelledby="headingsub2Nine"
                      data-bs-parent="#accordionsub2Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Accounts.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Four  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingNine">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub3Nine" aria-expanded="false"
                        aria-controls="collapsesub3Nine">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Tax
                      </button>
                    </h2>
                    <div id="collapsesub3Nine" className="accordion-collapse collapse" aria-labelledby="headingsub3Nine"
                      data-bs-parent="#accordionsub3Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Tax.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Five  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingNine">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub4Nine" aria-expanded="false"
                        aria-controls="collapsesub4Nine">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Law
                      </button>
                    </h2>
                    <div id="collapsesub4Nine" className="accordion-collapse collapse" aria-labelledby="headingsub4Nine"
                      data-bs-parent="#accordionsub4Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Law.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Six  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingNine">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub5Nine" aria-expanded="false"
                        aria-controls="collapsesub5Nine">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Business Studies
                      </button>
                    </h2>
                    <div id="collapsesub5Nine" className="accordion-collapse collapse" aria-labelledby="headingsub5Nine"
                      data-bs-parent="#accordionsub5Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Business.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Seven  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingNine">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub6Nine" aria-expanded="false"
                        aria-controls="collapsesub6Nine">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Business & Management
                      </button>
                    </h2>
                    <div id="collapsesub6Nine" className="accordion-collapse collapse" aria-labelledby="headingsub6Nine"
                      data-bs-parent="#accordionsub6Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Management.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>




            <div className="accordion-item bg-white">
              <h2 className="accordion-header mb-0" id="headingTen">
                <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false"
                  aria-controls="collapseTen">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Music & Dance
                </button>
              </h2>
              <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen"
                data-bs-parent="#accordionExample">
                <div className="accordion-body py-4 px-5">

                  {/* first  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingTen">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesubTen" aria-expanded="false"
                        aria-controls="collapsesubTen">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Music
                      </button>
                    </h2>
                    <div id="collapsesubTen" className="accordion-collapse collapse" aria-labelledby="headingsubTen"
                      data-bs-parent="#accordionsubExample">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Music.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Second  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingTen">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub1Ten" aria-expanded="false"
                        aria-controls="collapsesub1Ten">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Dance
                      </button>
                    </h2>
                    <div id="collapsesub1Ten" className="accordion-collapse collapse" aria-labelledby="headingsub1Ten"
                      data-bs-parent="#accordionsub1Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Dance.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Third  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingTen">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub2Ten" aria-expanded="false"
                        aria-controls="collapsesub2Ten">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Singing
                      </button>
                    </h2>
                    <div id="collapsesub2Ten" className="accordion-collapse collapse" aria-labelledby="headingsub2Ten"
                      data-bs-parent="#accordionsub2Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Singing.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Four  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingTen">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub3Ten" aria-expanded="false"
                        aria-controls="collapsesub3Ten">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Instruments
                      </button>
                    </h2>
                    <div id="collapsesub3Ten" className="accordion-collapse collapse" aria-labelledby="headingsub3Ten"
                      data-bs-parent="#accordionsub3Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Instruments.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Five  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingTen">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub4Ten" aria-expanded="false"
                        aria-controls="collapsesub4Ten">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Theatre & Film
                      </button>
                    </h2>
                    <div id="collapsesub4Ten" className="accordion-collapse collapse" aria-labelledby="headingsub4Ten"
                      data-bs-parent="#accordionsub4Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Film.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>


            <div className="accordion-item bg-white">
              <h2 className="accordion-header mb-0" id="headingEleven">
                <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false"
                  aria-controls="collapseEleven">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Religious Studies
                </button>
              </h2>
              <div id="collapseEleven" className="accordion-collapse collapse" aria-labelledby="headingEleven"
                data-bs-parent="#accordionExample">
                <div className="accordion-body grid grid-cols-2 py-4 px-5">
                  {RegionalStudies.map((val, key) => {
                    return (
                      <label>
                        <input type='checkbox' className='mr-1' value={val.name} />
                        {val.name} </label>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="accordion-item bg-white">
              <h2 className="accordion-header mb-0" id="headingTwelve">
                <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false"
                  aria-controls="collapseTwelve">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Visual Arts
                </button>
              </h2>
              <div id="collapseTwelve" className="accordion-collapse collapse" aria-labelledby="headingTwelve"
                data-bs-parent="#accordionExample">
                <div className="accordion-body grid grid-cols-2 py-4 px-5">
                  {VisualArts.map((val, key) => {
                    return (
                      <label>
                        <input type='checkbox' className='mr-1' value={val.name} />
                        {val.name} </label>
                    )
                  })}
                </div>
              </div>
            </div>


            <div className="accordion-item bg-white">
              <h2 className="accordion-header mb-0" id="headingThirteen">
                <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false"
                  aria-controls="collapseThirteen">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Test Paper
                </button>
              </h2>
              <div id="collapseThirteen" className="accordion-collapse collapse" aria-labelledby="headingThirteen"
                data-bs-parent="#accordionExample">
                <div className="accordion-body py-4 px-5">

                  {/* First  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingThirteen">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesubThirteen" aria-expanded="false"
                        aria-controls="collapsesubThirteen">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Certifications
                      </button>
                    </h2>
                    <div id="collapsesubThirteen" className="accordion-collapse collapse" aria-labelledby="headingsubThirteen"
                      data-bs-parent="#accordionsubExample">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        <label>
                          <input type='checkbox' className='mr-1' value='B.Ed' />
                          B.Ed </label>
                      </div>
                    </div>
                  </div>

                  {/* Second  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingThirteen">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub1Thirteen" aria-expanded="false"
                        aria-controls="collapsesub1Thirteen">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Entrance Exams
                      </button>
                    </h2>
                    <div id="collapsesub1Thirteen" className="accordion-collapse collapse" aria-labelledby="headingsub1Thirteen"
                      data-bs-parent="#accordionsub1Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Exams.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Third  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingThirteen">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub2Thirteen" aria-expanded="false"
                        aria-controls="collapsesub2Thirteen">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Government Exams
                      </button>
                    </h2>
                    <div id="collapsesub2Thirteen" className="accordion-collapse collapse" aria-labelledby="headingsub2Thirteen"
                      data-bs-parent="#accordionsub2Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Govexam.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Four  */}
                  <div className="accordion-item bg-white">
                    <h2 className="accordion-header mb-0" id="headingThirteen">
                      <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapsesub3Thirteen" aria-expanded="false"
                        aria-controls="collapsesub3Thirteen">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        Other Exams
                      </button>
                    </h2>
                    <div id="collapsesub3Thirteen" className="accordion-collapse collapse" aria-labelledby="headingsub3Thirteen"
                      data-bs-parent="#accordionsub3Example">
                      <div className="accordion-body grid grid-cols-2 py-4 px-5">
                        {Otherexam.map((val, key) => {
                          return (
                            <label>
                              <input type='checkbox' className='mr-1' value={val.name} />
                              {val.name} </label>
                          )
                        })}

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="accordion-item bg-white">
              <h2 className="accordion-header mb-0" id="headingFourteen">
                <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourteen" aria-expanded="false"
                  aria-controls="collapseFourteen">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Others
                </button>
              </h2>
              <div id="collapseFourteen" className="accordion-collapse collapse" aria-labelledby="headingFourteen"
                data-bs-parent="#accordionExample">
                <div className="accordion-body grid grid-cols-2 py-4 px-5">
                  {Othersub.map((val, key) => {
                    return (
                      <label>
                        <input type='checkbox' className='mr-1' value={val.name} />
                        {val.name} </label>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="accordion-item bg-white">
              <h2 className="accordion-header mb-0" id="headingFifteen">
                <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifteen" aria-expanded="false"
                  aria-controls="collapseEleven">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Corporate Training
                </button>
              </h2>
              <div id="collapseFifteen" className="accordion-collapse collapse" aria-labelledby="headingFifteen"
                data-bs-parent="#accordionExample">
                <div className="accordion-body grid grid-cols-2 py-4 px-5">
                  {Traning.map((val, key) => {
                    return (
                      <label>
                        <input type='checkbox' className='mr-1' value={val.name} />
                        {val.name} </label>
                    )
                  })}
                </div>
              </div>
            </div>


            <div className="accordion-item bg-white">
              <h2 className="accordion-header mb-0" id="headingSixteen">
                <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSixteen" aria-expanded="false"
                  aria-controls="collapseSixteen">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Health & Wellness
                </button>
              </h2>
              <div id="collapseSixteen" className="accordion-collapse collapse" aria-labelledby="headingSixteen"
                data-bs-parent="#accordionExample">
                <div className="accordion-body grid grid-cols-2 py-4 px-5">
                  {healthwellness.map((val, key) => {
                    return (
                      <label>
                        <input type='checkbox' className='mr-1' value={val.name} />
                        {val.name} </label>
                    )
                  })}
                </div>
              </div>
            </div>


            <div className="accordion-item bg-white">
              <h2 className="accordion-header mb-0" id="headingSeventeen">
                <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeventeen" aria-expanded="false"
                  aria-controls="collapseSeventeen">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Statistics
                </button>
              </h2>
              <div id="collapseSeventeen" className="accordion-collapse collapse" aria-labelledby="headingSeventeen"
                data-bs-parent="#accordionExample">
                <div className="accordion-body grid grid-cols-2 py-4 px-5">
                  {StatisticsO.map((val, key) => {
                    return (
                      <label>
                        <input type='checkbox' className='mr-1' value={val.name} />
                        {val.name} </label>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="accordion-item bg-white">
              <h2 className="accordion-header mb-0" id="headingEighteen">
                <button className="
        accordion-button
        collapsed
        relative
        flex
        items-center
        w-full
        px-5
        text-base text-gray-800 text-left
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target="#collapseEighteen" aria-expanded="false"
                  aria-controls="collapseEighteen">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Games
                </button>
              </h2>
              <div id="collapseEighteen" className="accordion-collapse collapse" aria-labelledby="headingEighteen"
                data-bs-parent="#accordionExample">
                <div className="accordion-body grid grid-cols-2 py-4 px-5">
                  {Games.map((val, key) => {
                    return (
                      <label>
                        <input type='checkbox' className='mr-1' value={val.name} />
                        {val.name} </label>
                    )
                  })}
                </div>
              </div>
            </div>





          </div>


        </div>

        <div className='mt-4 flex justify-between p-6'>
          <button className='bg-blue-500 text-white rounded p-2' onClick={props.handleBack} >	&larr; Back</button>
          <button className='bg-blue-500 text-white rounded p-2' onClick={props.handleNext}> Next &rarr;</button>
        </div>
      </div>


    </>

  )
}



const Step4 = (props) => {

  const [formFields, setformFields] = useState([{
    Degree: '', specilisation: '', University: '', year: ''
  }])

  const handleOnChange = (e, index) => {
    let data = [...formFields];
    data[index][e.target.name] = e.target.value;
    data[index][e.target.name] = e.target.value;
    data[index][e.target.name] = e.target.value;
    data[index][e.target.name] = e.target.value;
    console.log(e.target.name)
    setformFields(data)
  }

  const submit = (e) => {
    e.preventDefault();

    console.log(formFields)
  }

  const addFields = () => {
    let obj = {
      Degree: '', specilisation: '', University: '', year: ''
    }
    setformFields([...formFields, obj])
    console.log(formFields)
  }
  const remove = () => {
    let data = [...formFields]
    data.splice(data.length - 1)
    setformFields(data)
    
  }

  return (

    <>

      <div className='md:w-3/5 w-full mx-auto mt-5 rounded drop-shadow-lg bg-white h-content'>
        {/* Progress Bar */}
        <div className='h-10 w-full'>
          <div className='h-2 w-full bg-gray-300'>
            <div className={`h-2 w-${props.progress} bg-blue-400`}></div>
          </div>

        </div>

        <div className=''>
          <h1 className='text-2xl text-center'>Educational Background</h1>
        </div>
        {formFields.map((val, index) => {
          return (
            <>
              <div className='flex flex-col' key={index}>

                <div className='mt-8 flex md:flex-row flex-col md:items-center justify-between p-4'>
                  <div className='flex flex-col'>
                    <label htmlFor="" className=''>Degree:</label>
                    <input name='Degree' value={val.Degree} onChange={(e) => { handleOnChange(e, index) }} type="text" placeholder='' className='py-1 border border-black rounded px-1' />
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="" className=''>Specialization:</label>
                    <input name='specilisation' type="text" onChange={(e) => { handleOnChange(e, index) }} className='py-1 border border-black rounded px-1' placeholder='Ex. Economics' />
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="" className=''>University:</label>
                    <input type="text" name='University' onChange={(e) => { handleOnChange(e, index) }} className='py-1 border border-black rounded px-1' placeholder='New York City' />
                  </div>
                  <div className='flex flex-col'>
                    <label htmlFor="" className=''>Year:</label>
                    <input type='text' placeholder='Year' name='year' className='py-1 border border-black rounded px-1' onChange={(e) => { handleOnChange(e, index) }} />
                  </div>

                  <div className='mt-6'>
                    <button onClick={remove} className='p-2 rounded bg-gray-200'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>

                    </button>
                  </div>


                </div>
              </div>

            </>
          )
        })}



        {/* <button onClick={submit}>Submit</button> */}

        <div className='w-full'>
          <button onClick={addFields} className='flex mx-auto py-2 bg-blue-400 px-2 rounded'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
          </svg>Add another Qualification</button>
        </div>




        <div className='mt-16 flex justify-between p-6'>
          <button className='bg-blue-500 text-white rounded p-2' onClick={props.handleBack} >	&larr; Back</button>
          <button className='bg-blue-500 text-white rounded p-2' onClick={props.handleNext}> Next &rarr;</button>
        </div>
      </div>

    </>


  )

}
const Step5 = (props) => {
  const [check, setcheck] = useState([{}])
  const userdata = {
    check: check,
    YourCurrentProfession: '',
    dob: '',
    know: '',
    status: ''
  }
  const handleChange1 = (e) => {
    const { value, checked } = e.target;
    console.log(value, checked)
    // const {val} = check
    // console.log(val) 
    console.log(`${value} is ${checked}`)
    if (checked) {
      setcheck(
        [...check, value]
      )
    }
    else {
      setcheck({
        check: check.filter((e) => e !== value)
      })
    }

    console.log(userdata)
  }

  const handleChange = (e) => {


  }
  const onSubmit = () => {

  }


  return (
    <>
      <div className='md:w-3/5 w-full mx-auto mt-5 rounded drop-shadow-lg bg-white h-content'>
        {/* Progress Bar */}
        <div className='h-10 w-full'>
          <div className='h-2 w-full bg-gray-300'>
            <div className={`h-2 w-${props.progress} bg-blue-400`}></div>
          </div>

        </div>
        <div className='pt-7 flex flex-col pl-8'>
          <h1 className='text-center text-2xl font-bold'>Interested in ?</h1>
          <label htmlFor="" className='mt-5'>
            <input type="checkbox" value='Home Tutoring' onChange={handleChange1} /> Home Tutoring</label>
          <label htmlFor="">
            <input type="checkbox" value='Online Tutoring' onChange={handleChange1} />Online Tutoring </label>
          <label htmlFor="">
            <input value='School Jobs' type="checkbox" onChange={handleChange1} />School Jobs</label>
          <label htmlFor="">
            <input value=' Institute Jobs' type="checkbox" onChange={handleChange1} /> Institute Jobs</label>
          <input type="text" className='mt-4 bg-gray-50 drop-shadow-lg w-11/12 py-2 px-2' onChange={handleChange1} placeholder='Your Current Profession' />
          <input type="date" className='mt-4 bg-gray-50 drop-shadow-lg w-11/12 py-2 px-2' placeholder='Your Date of Birth' />
          <input type="text" className='mt-4 bg-gray-50 drop-shadow-lg w-11/12 py-2 px-2' placeholder='Where from you came to know about us?' />
          <h1 className='mt-8 flex flex-col'> <label htmlFor="">
            Your Marital Status
            <label htmlFor="" className='ml-4 mr-1'> <input type="radio" value='married' onChange={handleChange} className='' name='status' />Married
            </label><label htmlFor="" className='ml-4 mr-1'> <input type="radio" value='unmarried' onChange={handleChange} className='' name='status' />Unmarried
            </label></label> </h1>
        </div>

        {/* <button onClick={onSubmit} className='p-4'> click me</button> */}
        <div className='mt-4 flex justify-between p-6'>
          <button className='bg-blue-500 text-white rounded p-2' onClick={props.handleBack} >	&larr; Back</button>
          <button className='bg-blue-500 text-white rounded p-2' onClick={props.handleNext}> Next &rarr;</button>
        </div>
      </div>




    </>


  )

}