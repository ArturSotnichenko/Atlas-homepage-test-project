import React from 'react';
import HeaderBlock from './components/HeaderBlock/HeaderBlock';
import Section1 from './components/Section1/Section1';
import './App.css';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3/Section3';
import Section4 from './components/Section4/Section4';
import Section5 from './components/Section5/Section5';
import Section6 from './components/Section6/Section6';




function App() {
  return (
    <div className='App'>
     <HeaderBlock/>
     <Section1/>
     <Section2/>
     <Section3/>
     <Section4/>
     <Section5/>
     <Section6/>

    </div>
  );
}

export default App;
