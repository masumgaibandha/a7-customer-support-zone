import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white pt-10">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 pb-5 border-b border-white/35">
     
      <nav className="space-y-3 lg:col-span-1">
        <h6 className="font-bold text-xl">CS — Ticket System</h6>
        <p className="text-sm leading-6 opacity-90">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text...
        </p>
      </nav>

      
      <nav className="space-y-3">
        <h6 className="font-medium text-xl">Company</h6>
        <div className="flex flex-col space-y-2">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Sales</a>
        </div>
      </nav>

     
      <nav className="space-y-3">
        <h6 className="font-medium text-xl">Services</h6>
        <div className="flex flex-col space-y-2">
          <a className="link link-hover">Products & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </div>
      </nav>

     
      <nav className="space-y-3">
        <h6 className="font-medium text-xl">Information</h6>
        <div className="flex flex-col space-y-2">
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Join Us</a>
        </div>
      </nav>

    
      <nav className="space-y-3">
        <h6 className="font-medium text-xl">Social Links</h6>
        <div className="flex gap-2 items-center">
          <img src="https://i.ibb.co/fVrMrGxZ/twitter.png" alt="" className="w-5 h-5" />
          <a className="link link-hover">@CS — Ticket System</a>
        </div>
        <div className="flex gap-2 items-center">
          <img src="https://i.ibb.co/7N0ZcB5D/li.png" alt="" className="w-5 h-5" />
          <a className="link link-hover">@CS — Ticket System</a>
        </div>
        <div className="flex gap-2 items-center">
          <img src="https://i.ibb.co/Dfwkkk50/fb.png" alt="" className="w-5 h-5" />
          <a className="link link-hover">@CS — Ticket System</a>
        </div>
        <div className="flex gap-2 items-center">
          <img src="https://i.ibb.co/j9SQS1yF/email.png" alt="" className="w-5 h-5" />
          <a className="link link-hover">support@cst.com</a>
        </div>
      </nav>
    </div>

    <div className="py-7">
      <h1 className="text-center">© 2025 CS — Ticket System. All rights reserved.</h1>
    </div>
  </div>
</footer>


  )
}

export default Footer