import React, { useEffect, useState } from 'react'
import BranchBar from './components/branchBar'
import Button from '@/components/common/button'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const branchBars = [
  {name: 'Ahtisham', userId: 1 },
  {name: 'Qasim', userId: 2 },
  {name: 'Umar', userId: 3 },
  {name: 'Azhar', userId: 4 },
]

const BranchesScreen = () => {
  const {branches} = useSelector(state=> state?.admin)
  const router = useRouter();
  const [branchesList, setBranchesList] = useState([])

  useEffect(()=>{
    if(branches != null){
      setBranchesList([...branches])
    }
  },[branches])
  return (
    <div className='flex w-full flex-col gap-y-12'>
      <div className="flex justify-between items-center">
        <p className="text-black font-bold text-[35px]">UP branches</p>
        <div className="w-[200px]">
        <Button
            title={"Create new"}
            style={`w-full text-[20px] rounded-xl tracking-[-0.6px] font-semibold bg-[#2e8cde] text-white py-3`}
            onClick={()=> router.push(`/admin/branches/new`)}
          />
        </div>
      </div>

        <div className='flex flex-col gap-y-4'>
        {branchesList.map((branchBar, ind) => {
            return (
              <BranchBar key={ind} branch={branchBar} callFrom={'branches'}/>
            )
          })}
        </div>
    </div>
  )
}

export default BranchesScreen