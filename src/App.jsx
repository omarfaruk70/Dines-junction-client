import { Outlet } from 'react-router-dom';
import Navbar from './Sections/Navbar';
import Footer from './Sections/Footer';
function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default App
