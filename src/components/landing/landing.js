import React from 'react'
import AttentionSeeker from './components/attentionSeeker'
import BrowseJobs from './components/browseJobs'
import Hero from './components/hero'
import JobTypes from './components/jobTypes'
import OurApplication from './components/ourApplication'
import Young from './components/young'

const Landing = () => {
  return (
    <div className='w-full flex-col'>
        <Hero/>
        <JobTypes/>
        <AttentionSeeker/>
        <Young/>
        <OurApplication/>
        <BrowseJobs/>
    </div>
  )
}

export default Landing