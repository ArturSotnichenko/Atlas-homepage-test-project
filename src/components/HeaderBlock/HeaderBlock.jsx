import React from 'react';
import logoheader from '../../assets/logo/logoheader.svg'
import Vector from '../../assets/images/Vector.png'
import './HeaderBlock.css'
import phone from '../../assets/icons/phone/phone.svg'

const HeaderBlock = () => {

    return (
        <div className='header-block-wrapper'>
            <div className='header-block-frame'>
                <div className='nav-el'>
                    <div > <img className='logo' src={logoheader} alt="Logo"/></div>
                    <div className='header-nav' >
                        <a className='nav-words' href="#"> about </a>
                        <a className='nav-words' href="#"> services </a>
                        <a className='nav-words' href="#"> location </a>
                        <a className='nav-words' href="#"> careers </a>
                        <a className='nav-words' href="#"> contact</a>
                    </div>
                    <div> <img src={Vector} alt="icon"/> </div>
                </div>

                <div className='grop1-block'>
                    <div className='quote-fraim-1'>
                        <p className='quote-1'> You&#8217;re the center of our world</p>
                    </div>
                    
                    <div className='quotes2-frame'>
                    <div className='group2-colon1'>
                        <p className='quotes-1'> Atlas Healthcare Group is a leading provider of healthcare management and consulting services, based in Central New Jersey. </p> 
                        </div>
                    <div className='group2-colon2'> 
                        <p className='quotes-2'> Our expertise in all things operational, clinical, and financial, positions us as a strategic partner for assisted living,
                             long-term care and rehabilitation facilities. We work with healthcare centers to create superior resident experiences.</p>
                     <div className='el-1'>
                        <p className='w-color-W w-size-20'>Our story</p>
                        <p className='w-color-D w-size-20'>Join Our Team</p>
                     </div>
                     <div className='phone-frame'>
                        <div>
                        <img src={phone} alt="phone" />
                        </div>
                        
                        <div>
                            <p className='w-size-20'>Give us a call&#58;</p>
                            <p className='phone-number'>&#40;866 &#41;923&#8211;3762</p>
                        </div>
                     </div>
                     </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default HeaderBlock;