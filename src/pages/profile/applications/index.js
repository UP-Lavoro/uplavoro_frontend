import withAuth from '@/components/privateRoute'
import MyApplications from '@/components/profile/myApplications'
import ProfileLayout from '@/components/profileLayout'
import { getAppliedJobOffers, getFavouriteJobOffers } from '@/redux/actions/userActions'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Applications = () => {
  const { token } = useSelector((state) => state?.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getAppliedJobOffers(token))
    }else{
      router.push('/login')
    }
  }, [token]);
  return (
    <ProfileLayout>
        <MyApplications/>
    </ProfileLayout>
  )
}

export default withAuth(Applications)