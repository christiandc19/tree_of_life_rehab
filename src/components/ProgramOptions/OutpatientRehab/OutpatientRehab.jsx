import React from 'react'
import Tree from '../../../assets/tree.webp'

import ContactForm from '../../LandingPage/ContactForm'
import Insurance from '../../LandingPage/Insurance'
import Services from '../../LandingPage/Services'
import OutpatientRehabSection from './OutpatientRehabSection'


const OutpatientRehab = () => {
    return (

        <>        
        <div className='addiction-program'>
        
            <div className='tree'>
                <img src={Tree} alt='tee' loading='lazy' />
            </div>
        
            <div className="addiction-program-content">
                <div className='addiction-program-caption'>
                    <h1>Outpatient Program</h1>    
                </div>
                        
            </div>
        </div>
        
        <OutpatientRehabSection />
        <Insurance />  
        <Services />
        <ContactForm />
        </>
        
            )
        
        }

export default OutpatientRehab
