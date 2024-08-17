import React from 'react'

function ExperienceWidget({image, link, description, title}) {
  return (
    <div className='experience-widget'>
      <div className="experience-widget-text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <a href={link} target="_blank" rel="noreferrer"><img src={image} alt="gals-website" /></a>
    </div>
  )
}

export default ExperienceWidget
