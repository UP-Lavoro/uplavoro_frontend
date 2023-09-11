import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/header/header'
import Footer from '@/components/footer/footer'
import Landing from '@/components/landing/landing'

export default function Home() {
  console.log('on')
  return (
    <div className='w-full'>
        <Landing/>
    </div>
  )
}
