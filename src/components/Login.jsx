import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Login() {
  const history = useNavigate();
  const userPhoto = useSelector((state)=>{ return state.userxyz.photo; })

    useEffect(()=>{
      if(userPhoto){
        // console.log(userPhoto);
        history('/')
      }

    })

  

  return (
    <div className='flex items-center justify-center h-[calc(100vh-55px)]
     w-[100vw] bg-login bg-cover bg-top  bg-no-repeat' >

        <div className='h-[50%] flex items-center justify-center
         flex-col my-[20vh]  lg:w-[40%] md:w-[60%] 
          sm:w-[80%]  max-[640px]:w-[80%] 
          '>

         <img src='/images/cta-logo-one.svg' alt='' className='mb-2'/>

         <button className=' w-[100%] my-1 py-[2vh] rounded-[4px] bg-[#0063e5] uppercase tracking-[1.5px]
         border-solid border-transparent hover:bg-[#0483ee] viewer_h' >Get All Three</button>

         <p className=' text-center my-3 text-md  max-[640px]:text-[11px] font-mono '>
            Get Premier Access to Rays and the Last Dragon for an addition fee with a Disney+ subscription.
            As of 03/26/21, the price of Disney+ and the Disney Bundle will increase by $1.
         </p>

         <img src='/images/cta-logo-two.png' alt=''
         className=' my-2 '/>
        </div>
    </div>
  )
}

export default Login