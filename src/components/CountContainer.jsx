import React, {use, useState} from 'react';
import CountBox from './CountBox'
import TicketCard from './ticket/TicketCard';
import TaskStatusCard from './ticket/TaskStatusCard';
import TicketResolved from './ticket/TicketResolved';
import { toast } from 'react-toastify';

const CountContainer = ({promise}) => {
  const data = use(promise);
  const [tickets, setTickets] = useState(data)


  const [ticketItems, setTicketItems] = useState([])
  const [resolvedItems, setResolvedItems] = useState([])
  
  
  const handleTicket =(ticket) =>{
const isExist = ticketItems.find((item) => item.id === ticket.id);
if(isExist){
  
  toast.error("Ticket Already Processing")
  return;
}

  setTicketItems(prev => [...prev, ticket]);
  toast.success("In Progress");
}

const handleTaskResolved = (ticket) =>{
  toast.success("Completed!")
  const newResolvedItems = [...resolvedItems, ticket];
  setResolvedItems(newResolvedItems);

  const remaining = ticketItems.filter((item) => item.id !== ticket.id);
setTicketItems(remaining);

const remainingTickets = tickets.filter((item)=>item.id !== ticket.id);
setTickets(remainingTickets);

}


  return (
    <div>
     <main className='bg-[#f5f5f5]'>
       <CountBox 
       ticketCardTotal={ticketItems.length}
       ticketTotal={tickets.length}
        resolvedTotal = {resolvedItems.length}
       ></CountBox>
    
    <section>
    <div className='container mx-auto'>
      <h1 className="font-semibold text-2xl pb-5">Customer Tickets</h1>
      

{/* Full card page */}
    <div className='pb-10 grid lg:grid-cols-12 grid-cols-1 gap-6'>
 {/* LEFT */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 col-span-9 cursor-pointer">
          {tickets.map((ticket)=>(
        
          <TicketCard handleTicket ={handleTicket} key={ticket.id} ticket = {ticket}></TicketCard>

            ))}



         </div>
 
{/* RIGHT (sidebar) */}
        <div className="flex-none col-span-3 px-2">
       
        <div className="mb-5 space-y-2 flex flex-col space-y-5">
            <h1 className="font-semibold text-2xl">Task Status</h1>
            <div className='space-y-5 text-[18px] font-semibold'>
             
              {ticketItems.map((ticket)=> (
                <TaskStatusCard
                handleTaskResolved={handleTaskResolved}
                key={ticket.id} 
                ticket={ticket}>
                </TaskStatusCard>
              
              ))

              }
            </div>
            
          </div>

          <div className="space-y-2 flex flex-col space-y-5">
            <h1 className="font-semibold text-2xl">Resolved Task</h1>
            <div className='space-y-5'>
              {resolvedItems.map((ticket)=>(
                <TicketResolved key={ticket.id} ticket={ticket}>

                </TicketResolved>
              )
               
                

              )}
            </div>
            
          </div>

        </div>




    </div>
     
    </div>
    </section>

     </main>
 

    </div>
  )
}

export default CountContainer;