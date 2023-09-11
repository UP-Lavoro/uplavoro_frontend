import withAuth from '@/components/privateRoute'
import CreateEditCV from '@/components/profile/createEditCV'
import ProfileLayout from '@/components/profileLayout'
import { getConfig, getUserCV } from '@/redux/actions/userActions'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CreateCV = () => {
  const { token } = useSelector((state) => state?.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getUserCV(token));
      dispatch(getConfig(token));
    }else{
      router.push('/login')
    }
  }, [token]);
  return (
    <ProfileLayout>
        <CreateEditCV/>
    </ProfileLayout>
  )
}

export default withAuth(CreateCV)