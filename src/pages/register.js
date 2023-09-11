import LeftSection from '../components/register/leftSection';
import React, { useEffect, useState } from 'react'
import RightSection from '../components/register/rightSection';
import { getSession } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '@/redux/actions/authActions';
import { useRouter } from 'next/router';

const Register = ({session}) => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const router = useRouter();
  useEffect(()=>{
    if(session != null && auth?.sessionStart == true){
      let postData = {
        "name" : session?.user?.name ? session?.user?.name : '',
        "email" : session?.user?.email ? session?.user?.email : '',
        "source_domain" : session?.accessToken?.provider ? session?.accessToken?.provider : ''
      }
      dispatch(registerUser(postData, router))
    }
  },[session])
  
  return (
    <div className='flex w-full'>
      <div className={`w-[35%]`}>
        <LeftSection />
      </div>
      <div className='w-[65%]'>
        <RightSection/>
      </div>
    </div>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context)
  
  return {
    props: {
      notShowHeader: true,
      session,
    },
  }
}

export default Register