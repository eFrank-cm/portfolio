import React, { useState } from 'react'
import { Link } from 'react-scroll'

export const NavBar = () => {
  return (
    <>
      <nav className="mt-5">
        <Link href='/' to="about" spy={true} offset={-80} >
          <div className='line'></div>
          <span>SOBRE MI</span>
        </Link>
        <Link href='/' to="experience" spy={true} offset={-80} >
          <div className='line'></div>
          <span>EXPERIENCIA</span>
        </Link>
        <Link href='/' to="proyects" spy={true} offset={-80} >
          <div className='line'></div>
          <span>PROYECTOS</span>
        </Link>
        <Link href='/' to="studies" spy={true} offset={-80} >
          <div className='line'></div>
          <span>ESTUDIOS</span>
        </Link>
      </nav>
    </>
  )
}
