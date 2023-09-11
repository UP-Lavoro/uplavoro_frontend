import React from 'react'

const Label = ({name, required=false }) => {
  return (
    <label className="flex gap-x-2 text-black tracking-[-0.6px]">{name} {required ? <span className='text-[#cb0000]'>*</span> : ''}</label>
  )
}

export default Label