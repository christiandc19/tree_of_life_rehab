import React from 'react'

import ContactForm from '../../LandingPage/ContactForm'
import Insurance from '../../LandingPage/Insurance'
import Services from '../../LandingPage/Services'
import VeteransAddictionSection from './VeteransAddictionSection'
import Tree from '../../../assets/tree.webp'


const VeteransAddictionHero = () => {
    return (
<>        
<div className='addiction-program'>

    <div className='tree'>
        <img src={Tree} alt='tee' loading='lazy' />
    </div>

    <div className="addiction-program-content">
        <div className='addiction-program-caption'>
            <h1>Veterans Addiction Program</h1>    
        </div>
                
    </div>
</div>

<VeteransAddictionSection />
<Insurance />  
<Services />
<ContactForm />
</>


    )
}

export default VeteransAddictionHero
