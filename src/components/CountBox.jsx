import React from 'react'

const CountBox = ({ticketTotal, ticketCardTotal, resolvedTotal}) => {
  return (
    <div className='bg-[#f5f5f5] py-5'>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 my-10 container mx-auto"> 
            <div
              className="relative rounded-md p-7 text-white max-w-[708px] h-[250px]
            bg-[linear-gradient(125.07deg,rgba(99,46,227,1)_0%,rgba(159,98,242,1)_100%)]
            flex flex-col items-center justify-center overflow-hidden"
            
            >
              <img
                src="https://i.ibb.co/YThBnrnf/vector1.png"
                className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-75"
                alt=""
                aria-hidden="true"
              />
              <img
                src="https://i.ibb.co/YThBnrnf/vector1.png"
                className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-75 scale-x-[-1]"
                alt=""
                aria-hidden="true"
              />

              <h1 className="text-2xl">In-Progress</h1>
              <span className="font-semibold text-[60px]">{ticketCardTotal}</span>
            </div>

            <div
              className="relative rounded-md p-7 max-w-[708px] text-white h-[250px]
            bg-[linear-gradient(90deg,rgba(84,207,103.68,1)_0%,rgba(0,130,122.2,1)_100%)]
            flex flex-col items-center justify-center overflow-hidden"
            >
              <img
                src="https://i.ibb.co/YThBnrnf/vector1.png"
                className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 w-75"
                alt=""
                aria-hidden="true"
              />

              <img
                src="https://i.ibb.co/YThBnrnf/vector1.png"
                className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-75 scale-x-[-1]"
                alt=""
                aria-hidden="true"
              />

              <h1 className="text-2xl">Resolved</h1>
              <span className="font-semibold text-[60px]">{resolvedTotal}</span>
            </div>
          </div>
    </div>
  )
}

export default CountBox