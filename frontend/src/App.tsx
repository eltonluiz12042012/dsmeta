import { ToastContainer } from 'react-toastify';

import Header from "./components/Header"
import NotificationButton from "./components/NotificatioButton"
import SalesCard from "./components/SalesCard/SalesCard"

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
        <main>
          <section id="sales">
            <div className="dsmeta-container">
              <SalesCard/>
             </div>
          </section>
        </main>
    </>
  )
  
}

export default App
