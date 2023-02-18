import React from 'react';
import '../Section4/Section4.css'
import family from '../../assets/icons/family.svg'
import phone from '../../assets/icons/phone/phone.svg'

const Section4 = () => {
    return (
        <div className='section4'>
            <div className='section4-wrapper'>
                <div className='sct4-title'>Supporting Your Health</div>
                <div className='sct4-art-wrapper'>
                    <div className='sct4-emblem'>
                        <div> <img src={family} alt="icon" /></div>
                        <button className='sct4-btn1'>Join Our Team </button>
                    </div>

                    <div className='sect4-dtls-wrapper'>
                        <div className='txt4-block'>
                            <p>We are committed to the delivery of highly
                                individualized, client-centered care and providing the best possible experience to those we serve
                                and the families who entrust their loved ones to us.</p>

                            <div className='phone-frame'>
                                <div>
                                    <img src={phone} alt="phone" />
                                </div>

                                <div>
                                    <p className='w-size-20'>Give us a call&#58;</p>
                                    <p className='phone-number w-color-D'>&#40;866 &#41;923&#8211;3762</p>
                                </div>
                            </div>
                            <div className='sct4-btn-wrapper' >
                                <button className='sct4-btn'>News</button>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


        </div>
    );
};

export default Section4;