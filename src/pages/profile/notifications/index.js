import withAuth from '@/components/privateRoute'
import NotificationsEmailSMS from '@/components/profile/notificationsEmailSMS'
import ProfileLayout from '@/components/profileLayout'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MyNotifications = () => {
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
        <NotificationsEmailSMS/>
    </ProfileLayout>
  )
}

export default withAuth(MyNotifications)