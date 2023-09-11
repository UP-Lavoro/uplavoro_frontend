import withAuth from '@/components/privateRoute'
import PersonalData from '@/components/profile/personalData'
import ProfileLayout from '@/components/profileLayout'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MyPersonalData = () => {
  const { token } = useSelector((state) => state?.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
    }else{
      router.push('/login')
    }
  }, [token]);
  return (
    <ProfileLayout>
        <PersonalData/>
    </ProfileLayout>
  )
}

export default withAuth(MyPersonalData) 