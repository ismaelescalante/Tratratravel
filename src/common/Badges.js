import React from 'react'
import '../styles/Badges.css'

export default function Badges({currentIndex, slides}) {
  return (
    <ul>
      {slides.map((slide, index)=> 
      <li  className={'control' + ((index === currentIndex) ? "active" : "")}
      key={index}
      >
      </li>
      )}
    </ul>
  )
}
