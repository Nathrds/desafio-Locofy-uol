import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './header/Navbar'
import BookWithMyRide from './needAride/BookWithMyRide'
import BestInClassRides from './whyShouldYouRide/BestInClassRides'
import DriveForm from './driveWithMyRide/DriveForm'
import Footer from './footer/Footer'

const App = () => {

  return (
    <>
      <Router>
        <Navbar/>
        <BookWithMyRide/>
        <BestInClassRides/>
        <DriveForm/>
        <Footer/>
      </Router>
    </>
  )
}

export default App
