import React from 'react'

function Home() {
  return (
    <div>
      <div id="hero" className='section'>
        <h1>Hero Section</h1>
        <span>Some tagline</span>
        <img src="https://picsum.photos/200/300" alt="hero pic" />
      </div>
      <div id="about" className='section'>
        <h2>About Section</h2>
        <span>Talk about myself (personal)</span>
        <img src="https://picsum.photos/200/300" alt="about pic" />
      </div>
      <div id="skills" className='section'>
        <h2>Skills Section</h2>
        {
        // make this section all horizontal
        }
        <h3>Frontend Skills</h3>
        <ul>
          <li>skill 1</li>
        </ul>
        <img src="https://picsum.photos/200/300" alt="skills pic" />
        <h3>Backend Skills</h3>
        <ul>
          <li>skill 1</li>
        </ul>
      </div>
      <div id="experience" className='section'>
        <h2>Experience Section</h2>
        <span>Share experience/link to people I've worked with</span>
        <img src="https://picsum.photos/200/300" alt="experience pic" />
      </div>
      <div id="contact" className="section">
        <h2>Contact Section</h2>
        <span>Insert a Formik tag here</span>
      </div>
      {
      // hero section component
      // about section component
      // feature section component
      // experience section component
      // contact section component
      // footer section component
      }
    </div>
  )
}

export default Home
