import React from 'react'

const TaskStatusCard = ({ticket, handleTaskResolved}) => {



  return (
    <div className="card max-w-[358px] max-h-[140px] bg-base-100 shadow-sm rounded">
  <div className="card-body">
     <h2 className="text-[18px] font-semibold">{ticket.title}</h2>
     <div className="py-2">
      <button onClick={()=> handleTaskResolved(ticket)} className="btn bg-[#02A53B] btn-block text-white font-semibold rounded">Complete</button>
    </div>
  </div>
</div>
  )
}

export default TaskStatusCard