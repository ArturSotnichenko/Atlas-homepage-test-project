import React from 'react';
import BuildingImage from '../../assets/images/BuildingImage.jpg'
import LargeLogo from '../../assets/logo/LargeLogo.svg'

import './Section1.css'

const Section1 = () => {
    return (
        <div className='section1'>
            <img className='logo-group1' src={LargeLogo} alt="" />
            <div className='section1-frame'>
                <div className='section1-wrapper'>
                    <div className='section-title'>
                        <p>Your Strategic Partner in Healthcare.</p>
                    </div>
                    <div className='article-wrapper'>
                        <div className='article-frame' >
                            <div className='bld-img-frame' ><img className='building-img' src={BuildingImage} alt="" /></div>
                            <div className='sct-art-frame'>
                                <p className='sct-art'>Currently, Atlas Healthcare Group owns and operates
                                    a handful of skilled nursing and rehabilitation
                                    facilities strategically located throughout the
                                    state of New Jersey, one of which is the largest
                                    ventilator facility in the state.</p>

                                <button className='brown-btn'> Find Location Near you</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section1;