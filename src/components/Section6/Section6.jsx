import React from 'react';
import './Section6.css'
import Map from './Map';







const Section6 = () => {
    return (
        <div className='section6'>

<div className='sct6-title'>

    <button className='NJ-btn'>NEW JERSEY</button>
    <button className='CT-btn'>CONNECTICUT</button>
</div>



<div className='map-wrapper'>
<Map/>
</div>

{/* AIzaSyCOZo07WVElkjVAnF6zszvJtCYZJaCo7to  */}     
        </div>
    );
};

export default Section6;