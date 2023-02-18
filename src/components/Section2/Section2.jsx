import React from 'react';
import star from '../../assets/icons/star.svg'
import '../Section2/Section2.css'

const Section2 = () => {
    return (
        <div className='section2'>
            <div className='section2-wrapper'>
                
                <div className='art1-wrapper'>
                    <div className='art1-frame'>
                    <p className='art-txt1'>Our commitment to excellence
                        is reflected in each of Atlas’ distinct services. </p>
                        </div>
                    <button className='brown-btn'>Improve Your Health</button>
                    
                </div>

                <div className='art2-wrapper'>
                    <div> <img src={star} alt="icon" /></div>
                    <div className='art-txt2'>
                        <p>As a leading consultant for the </p>
                        <p className='w-color-D art2-words'>management, operations, acquisition,<br/>                         development & improvement</p>
                            
                        <p>of  senior healthcare facilities, we specialize in assisting underperforming 
                            facilities raise their standards of performance and outcomes.
                        </p>
                    </div>
                </div>

            </div>





        </div>
    );
};

export default Section2;