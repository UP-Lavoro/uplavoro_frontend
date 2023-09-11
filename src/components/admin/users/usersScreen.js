import React, { useEffect, useState } from 'react'
import UserBar from './componenets/userBar'
import ReactSelectField from '@/components/common/reactSelectField'
import { useForm } from 'react-hook-form'
import Button from '@/components/common/button'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const userBars = [
  {name: 'Ahtisham', userId: 1 },
  {name: 'Qasim', userId: 2 },
  {name: 'Umar', userId: 3 },
  {name: 'Azhar', userId: 4 },
]

const UsersScreen = ({branchUsers = null, users = null, callFrom = ''}) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({});

  const [allUSers, setAllUsers] = useState([])
  const router = useRouter()
  console.log("🚀 ~ file: usersScreen.js:25 ~ UsersScreen ~ allUSers:", allUSers)

  useEffect(()=>{
    if(branchUsers != null ){
      setAllUsers([...branchUsers])
    }
    if(users != null && callFrom == 'admin_users'){
      setAllUsers([...users])
    }
  },[users, branchUsers])
  return (
    <div className='flex w-full flex-col gap-y-10'>
      <div className="flex justify-between items-center">
        <p className="text-black font-bold text-[35px]">All users</p>
        <div className="w-[200px]">
          <Button
            title={"Create new"}
            style={`w-full text-[20px] rounded-xl tracking-[-0.6px] font-semibold bg-[#2e8cde] text-white py-3`}
            onClick={()=> router.push(`/admin/users/new`)}
          />
        </div>
      </div>
        
        <div className='flex gap-x-4'>
          <div className='w-[25%]'>
            <ReactSelectField 
              name="location"
              placeHolder="Filter by location"
              control={control}
              optionData={[{id: 'm', label: 'M'}, {id: 'f', label: 'F'}]}
            />
          </div>
          <div className='w-[25%]'>
            <ReactSelectField 
              name="location"
              placeHolder="Filter by synced"
              control={control}
              optionData={[{id: 'm', label: 'M'}, {id: 'f', label: 'F'}]}
            />
          </div>
          <div className='w-[25%]'>
            <ReactSelectField 
              name="location"
              placeHolder="Order by name"
              control={control}
              optionData={[{id: 'm', label: 'M'}, {id: 'f', label: 'F'}]}
            />
          </div>
        </div>
        <div className='flex flex-col gap-y-4'>
          {allUSers?.length > 0 && allUSers?.map((userBar, ind) => {
            return (
              <UserBar key={ind} user={userBar} callFrom={callFrom}/>
            )
          })}
        </div>
    </div>
  )
}

export default UsersScreen