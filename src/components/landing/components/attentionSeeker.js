import Image from 'next/image'
import React from 'react'
import Character1 from '../../../../public/assets/images/home-character1.svg'

const AttentionSeeker = () => {
  return (
    <div className='bg-white px-40 2xl:px-72 py-20'>
      <div className='flex w-full'>
        <div className='w-[50%] flex flex-col gap-y-6 justify-center'>
          <div className='flex flex-col'>
            <p className='text-black text-[32px] xl:text-[50px] font-extrabold'>Special attention</p>
            <p className='text-hero text-[32px] xl:text-[50px] font-extrabold'>towards who work with us.</p>
          </div>
          <p className='text-paragraph xl:text-[20px]'>Con il termine lorem ipsum si indica un testo segnaposto utilizzato da grafici, progettisti, programmatori e tipografi a modo riempitivo per bozzetti e prove grafiche. 
          <br/><br/>È un testo privo di senso, composto da parole (o parti di parole) in lingua latina, riprese pseudocasualmente da uno scritto di Cicerone del 45 a.C, a volte alterate con l’inserzione di passaggi ironici 
          <br/><br/>La caratteristica principale è data dal fatto che offre una distribuzione delle lettere uniforme, apparendo come un normale blocco di testo leggibile.</p>
        </div>
        <div className='w-[50%] flex justify-center items-start'>
          <Image style={{width: '379.34px', height: '471.2px'}} src={Character1} alt='' />
        </div>
      </div>
    </div>
  )
}

export default AttentionSeeker