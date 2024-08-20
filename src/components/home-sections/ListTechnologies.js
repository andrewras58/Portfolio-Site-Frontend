import React from 'react'

function ListTechnologies({technologies}) {
  return (
    <div className="technologies-used">
      {Array.from(technologies).map((value, index) => {
        return (<img src={value} alt={`tech#${index+1}`} key={index}></img>);
      })}
    </div>
  )
}

export default ListTechnologies
