import React from "react";
import "./Insurance.css";

// Import your icons or images
import Aetna from '../../assets/Aetna.webp';
import Antem from '../../assets/anthem.webp';
import Beacon from '../../assets/beacon.webp';
import Bluecross from '../../assets/bluecross.webp';
import Cigna from '../../assets/cigna.webp';
import Horizon from '../../assets/horizon.webp';


const Insurance = () => {
  return (
    <div className="insurance" >

      
      <div className="insurance-container">

        <div className="insurance-category container">
        <h1>WE WORK WITH MAJOR INSURANCE</h1>
        <hr />
          <p>At Tree Of Live Rehab, we believe that quality healthcare should be accessible to all. That's why we're committed to working with a wide range of insurance providers to ensure our patients can receive the care they need without added financial stress. Explore our comprehensive list of accepted insurances above.</p>

          <div className="insurance-icons">

            <div className="insurance-item">
              <img src={Aetna} alt="Aetna" />
            </div>
            <div className="insurance-item">
              <img src={Antem} alt="Anthem" />
            </div>
            <div className="insurance-item">
              <img src={Beacon} alt="Beacon" />
            </div>
            <div className="insurance-item">
              <img src={Bluecross} alt="Bluecross" />
            </div>

            <div className="insurance-item">
              <img src={Cigna} alt="Cigna" />
            </div>

            <div className="insurance-item">
              <img src={Horizon} alt="Horizon" />
            </div>

          </div>

          <p>If you don’t see your insurance provider above, please reach out to us to find a way to assist you further.</p>


        </div>

      </div>
    </div>
  );
};

export default Insurance;
