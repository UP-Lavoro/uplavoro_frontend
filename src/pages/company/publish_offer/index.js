import PublishOfferForm from '@/components/company/publishOfferForm';
import withAuth from '@/components/privateRoute';
import ProfileLayout from '@/components/profileLayout'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const PublishOffer = () => {
  const auth = useSelector(state=> state?.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  console.log("🚀 ~ file: index.js:9 ~ CompanyProfile ~ auth:", auth)
  useEffect(()=>{
    if(auth?.token){
    }else{
      router.push('/company/login')
    }
  },[auth])
  return (
    <ProfileLayout callFrom='company'>
      <PublishOfferForm callFrom='company'/>
    </ProfileLayout>
  )
}

export async function getServerSideProps(context) {

  return {
    props: {
      callFrom: 'company',
    },
  };
}

export default withAuth(PublishOffer) 