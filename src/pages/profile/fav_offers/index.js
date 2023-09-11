import withAuth from '@/components/privateRoute'
import FavouriteOffers from '@/components/profile/favouriteOffers'
import ProfileLayout from '@/components/profileLayout'
import { getFavouriteJobOffers } from '@/redux/actions/userActions'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MyFavouriteOffers = () => {
  const { token } = useSelector((state) => state?.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getFavouriteJobOffers(token))
    }else{
      router.push('/login')
    }
  }, [token]);
  return (
    <ProfileLayout>
        <FavouriteOffers/>
    </ProfileLayout>
  )
}

export default withAuth(MyFavouriteOffers) 