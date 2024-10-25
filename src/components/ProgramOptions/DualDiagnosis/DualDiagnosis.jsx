import React from 'react'
import Tree from '../../../assets/tree.webp'

import ContactForm from '../../LandingPage/ContactForm'
import DualDiagnosisProgram from './DualDiagnosisProgram'
import Services from '../../LandingPage/Services'
import Insurance from '../../LandingPage/Insurance'


const DualDiagnosis = () => {
    return (
<>        
<div className='addiction-program'>

    <div className='tree'>
        <img src={Tree} alt='tee' loading='lazy' />
    </div>

    <div className="addiction-program-content">
        <div className='addiction-program-caption'>
            <h1>Dual Diagnosis</h1>    
        </div>
                
    </div>
</div>

<DualDiagnosisProgram />
<Insurance />  
<Services />
<ContactForm />
</>


    )
}

export default DualDiagnosis
