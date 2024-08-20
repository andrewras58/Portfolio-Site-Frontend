import React from 'react'
import ListTechnologies from './ListTechnologies';

function ExperienceWidget({image, link, description, title, time, technologies}) {
  return (
    <div className='experience-widget'>
      <div className="description">
        <div className="experience-widget-text">
          <h3>{title}</h3>
          <h4>{time}</h4>
          <p>{description}</p>
        </div>
        <ListTechnologies technologies={technologies} />
      </div>
      <a href={link} target="_blank" rel="noreferrer"><img className="focus website-preview" src={image} alt="gals-website" /></a>
    </div>
  )
}

export default ExperienceWidget
