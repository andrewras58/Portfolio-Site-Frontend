import React from 'react'
let placeholderIMG = require('./assets/placeholder.svg')

function Navbar() {
  return (
    <nav>
      <img src={ placeholderIMG.default } alt="site logo" />
      Navbar
    </nav>
  )
}

export default Navbar
