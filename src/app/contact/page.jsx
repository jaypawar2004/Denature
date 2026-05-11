import ContactFormSection from '@/components/ContactFormSection'
import ContactHero from '@/components/ContactHero'
import HowToStart from '@/components/HowToStart'
import Newsletter from '@/components/Newsletter'
import React from 'react'

const page = () => {
  return (
    <div className='mt-15'>
      <ContactHero />

<HowToStart />

<ContactFormSection />
<Newsletter />
    </div>
  )
}

export default page