import { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import CountBox from "./components/CountBox";
import CountContainer from "./components/CountContainer";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

const loadTicket = () => fetch("/tickets.json").then((res) => res.json());

function App() {
  const ticketPromise = loadTicket();

  const [count, setCount] = useState(0);

  return (
    <>
      <header className="bg-white-500 shadow-sm ">
        <Navbar> </Navbar>
      </header>
      <Suspense fallback={"Loading..."}>
        <CountContainer promise={ticketPromise}></CountContainer>
      </Suspense>
      <Footer></Footer>
<ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
      
    </>
  );
}

export default App;
