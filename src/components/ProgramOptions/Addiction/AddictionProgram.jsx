import React from 'react'

import ContactForm from '../../LandingPage/ContactForm'
import AddictionRehabSection from './AddictionRehabSection'
import Insurance from '../../LandingPage/Insurance'
import Services from '../../LandingPage/Services'
import Tree from '../../../assets/tree.webp'


const Addiction = () => {
return (

<>        
<div className='addiction-program'>

    <div className='tree'>
        <img src={Tree} alt='tee' loading='lazy' />
    </div>

    <div className="addiction-program-content">
        <div className='addiction-program-caption'>
            <h1>Alcohol Addiction Treatment Program</h1>    
        </div>
                
    </div>
</div>

<AddictionRehabSection />
<Insurance />  
<Services />
<ContactForm />
</>

    )
}

export default Addiction
