import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
            Hospital management is a vital field that involves the planning, direction, and
             administration of healthcare services within a hospital setting.
              Effective hospital management ensures that healthcare services are delivered efficiently, resources are utilized optimally
              , and the hospital environment supports patient care and safety. 
          </p>
          <p>
            Modern hospital management systems integrate technology to streamline processes such as patient registration, billing, app
            ointment scheduling, and medical record maintenance.
          </p>
          <p>
            The core functions of a hospital management system include optimizing patient care, enhancing hospital resource utilization, and ensuring compliance with healthcare standards and regulations. These systems are designed to reduce the administrative burden on healthcare providers, allowing them to focus on direct patient care.
          </p>
        &nbsp;
          <p>
            Hospital management goes beyond administration—it is at the heart of delivering quality healthcare and improving patient experiences. The integration of technology in hospital management not only modernizes traditional processes but also enables hospitals to provide a seamless and effective healthcare experience.
          </p>
         

        </div>
      </div>
    </>
  );
};

export default Biography;
