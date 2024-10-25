import React from 'react'

import ContactForm from '../../LandingPage/ContactForm'
import DetoxSection from './DetoxProgramSection'
import Insurance from '../../LandingPage/Insurance'
import Services from '../../LandingPage/Services'
import Tree from '../../../assets/tree.webp'


const DetoxProgram = () => {
return (

<>        
<div className='addiction-program'>

    <div className='tree'>
        <img src={Tree} alt='tee' loading='lazy' />
    </div>

    <div className="addiction-program-content">
        <div className='addiction-program-caption'>
            <h1>Detox Program</h1>    
        </div>
                
    </div>
</div>

<DetoxSection />
<Insurance />  
<Services />
<ContactForm />
</>

    )
}

export default DetoxProgram
