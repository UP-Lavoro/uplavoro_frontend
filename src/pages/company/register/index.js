import LeftSection from '@/components/register/leftSection';
import RightSection from '@/components/register/rightSection';
import { useRouter } from 'next/router';
import React from 'react'
import { useDispatch } from 'react-redux';

const CompanyRegister = () => {
  const dispatch = useDispatch()
  const router = useRouter();
  // useEffect(()=>{
  //   if(session != null && auth?.sessionStart == true){
  //     let postData = {
  //       "name" : session?.user?.name ? session?.user?.name : '',
  //       "email" : session?.user?.email ? session?.user?.email : '',
  //       "source_domain" : session?.accessToken?.provider ? session?.accessToken?.provider : ''
  //     }
  //     dispatch(registerUser(postData, router))
  //   }
  // },[session])
  
  return (
    <div className='flex w-full'>
      <div className={`w-[35%]`}>
        <LeftSection callFrom={'company'}/>
      </div>
      <div className='w-[65%]'>
        <RightSection callFrom={'company'}/>
      </div>
    </div>
  )
}


export async function getServerSideProps(context) {
  
  return {
    props: {
      notShowHeader: true,
    },
  }
}


export default CompanyRegister