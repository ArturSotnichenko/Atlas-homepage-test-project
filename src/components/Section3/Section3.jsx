import React from 'react';
import corp1 from '../../assets/images/corp1.jpg'
import '../Section3/Section3.css'
const Section3 = () => {
    return (
        <div className='section3'>
           
            <div className='section3-wrapper'>
               
                <div className='section3-title' >
                <p>We are the industry experts.</p>
            </div>
                  
                  <div className='section3-article'>
                     <div className='sct3-art1'>
                        <div className='sct3-art1-block'>
                        <p>Within only a few years, Atlas Healthcare Group has become the industry expert in healthcare management and acquisition, and are sought-after for their consulting services.
                            Our experience has proven successful in our own facilities.
                        </p>
                        <p>Now, we put it to work for yours.</p>
                        <button className='sct3-btn'>Our Services</button>
                        </div>
                    </div>

                    <div className='sct3-art2'>
                        <img className='sct3-art2-img' src={corp1} alt="" />
                    </div>
                    </div>
               
            </div>
        </div>
    );
};

export default Section3;