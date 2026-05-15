import CTASectionAbout from '@/components/CTASectionAbout'
import Gallery from '@/components/Gallery'
import React from 'react'

const page = () => {
  return (
    <div className='mt-15'>
      <Gallery />
      <CTASectionAbout />
    </div>
  )
}

export default page