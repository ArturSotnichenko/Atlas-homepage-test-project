
import React, { useState } from 'react';
import './Section5.css'
import PostList from './PostList';
import ArrowDown from '../../assets/icons/ArrowDown.svg'





function Section5() {


  const [posts, setPosts] = useState([
    { id: 1, backImg: require('../../assets/images/BuildingImage.jpg'), title: 'Atlas Rehabilitation and Healthcare at Daughters of Miriam', body: 'Clifton, NJ' },
    { id: 2, backImg: require('../../assets/images/bed.jpg'), title: 'Cedar Grove  Respiratory and   Nursing', body: 'Williamstown, NJ' },
    { id: 3, backImg: require('../../assets/images/recept.jpg'), title: 'Spring Hills Post Acute', body: 'Woodbury, NJ' },
    { id: 4, backImg: require('../../assets/images/BuildingImage.jpg'), title: 'Atlas Rehabilitation and Healthcare at Daughters of Miriam', body: 'Clifton, NJ' },
    { id: 5, backImg: require('../../assets/images/bed.jpg'), title: 'Cedar Grove  Respiratory and   Nursing', body: 'Williamstown, NJ' },
    { id: 6, backImg: require('../../assets/images/recept.jpg'), title: 'Spring Hills Post Acute', body: 'Woodbury, NJ' },
    { id: 7, backImg: require('../../assets/images/BuildingImage.jpg'), title: 'Atlas Rehabilitation and Healthcare at Daughters of Miriam', body: 'Clifton, NJ' },
    { id: 8, backImg: require('../../assets/images/bed.jpg'), title: 'Cedar Grove  Respiratory and   Nursing', body: 'Williamstown, NJ' },
    { id: 9, backImg: require('../../assets/images/recept.jpg'), title: 'Spring Hills Post Acute', body: 'Woodbury, NJ' },
    { id: 10, backImg: require('../../assets/images/BuildingImage.jpg'), title: 'Atlas Rehabilitation and Healthcare at Daughters of Miriam', body: 'Clifton, NJ' },
    { id: 11, backImg: require('../../assets/images/bed.jpg'), title: 'Cedar Grove  Respiratory and   Nursing', body: 'Williamstown, NJ' },
    { id: 12, backImg: require('../../assets/images/recept.jpg'), title: 'Spring Hills Post Acute', body: 'Woodbury, NJ' },
    { id: 13, backImg: require('../../assets/images/recept.jpg'), title: 'Spring Hills Post Acute', body: 'Woodbury, NJ' },
  ])

  const [noOfElement, setnoOfElement] = useState(6)
  const LoadMore = () => {
    setnoOfElement(noOfElement + noOfElement)
  }
  
  const slice = posts.slice(0, noOfElement)


  return (
    <div className="section5">

      <PostList posts={slice} title='Our Facilities' />

      {noOfElement<posts.length && (
          <div className='showMore-frame'>
          <p className='showMore-txt'>Show More</p>
          <img className='arrowDown-btn' onClick={() => LoadMore()} src={ArrowDown} alt="icon" />
        </div>
      )}

    </div>

  )
}

export default Section5;
