

const TicketCard = ({ticket, handleTicket}) => {


  return (
    <div onClick={() =>handleTicket(ticket)} className="card bg-white rounded-xl shadow-xl">
              <div className="card-body">
                <div className="flex justify-between tickets-center">
                  <h2 className="card-title text-[18px]">{ticket.title}</h2>
                  <button className="btn-status" data-status = {ticket.status}>
                    <span className="status-dot" data-status = {ticket.status} />
                    {ticket.status}
                  </button>
                </div>
                <p>{ticket.description}</p>
              </div>

              <div className="flex justify-between tickets-center text-sm text-gray-600 pb-5 px-3">
                <span>{ticket.id}</span>
                
                <p className=
                
                {
                  `font-semibold ${
                    ticket.priority === "HIGH PRIORITY" ? "text-[#F83044]" : ticket.priority === "MEDIUM PRIORITY"? 
                    "text-[#FEBB0C]" : "text-[#02A53B]"

                  }
                  
                  `
                }
                
                
                >
                  {ticket.priority}
                </p>


                <p>{ticket.customer}</p>
                <time className="flex tickets-center gap-2">
                  <img
                    src="https://i.ibb.co/W4hwncTC/Vector-1.png"
                    alt=""
                    className="max-w-4 h-4 object-contain"
                  />
                  {ticket.createdAt}
                </time>
              </div>
            </div>
  )
}

export default TicketCard