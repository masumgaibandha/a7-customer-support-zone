import React from 'react'

const Navbar = () => {
  return (
    <div>
      
    <div className="navbar flex lg:justify-between items-center container mx-auto py-4 flex-col lg:flex-row">
  <div className="navbar-start">
    <a className="btn btn-ghost text-2xl font-bold">CS — Ticket System</a>
  </div> 
  <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-5">      
      <ul className='flex gap-5 flex-col lg:flex-row'>
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
      </ul>
      <button className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white font-semibold"><span>+</span>New Ticket</button>
    </div> 
  </div>
  


    </div>
  )
}

export default Navbar
