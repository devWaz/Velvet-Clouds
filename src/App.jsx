import HeroSection from "./components/LandingPage/HeroSection"
import InfoSection from "./components/LandingPage/InfoSection"
import Schedules from "./components/LandingPage/Schedules"
import PhotoSection from "./components/LandingPage/PhotoSection"
import ContactSection from "./components/LandingPage/ContactSection"
import Footer from "./components/LandingPage/Footer"

function App() {

  return (
    <div className="overflow-x-hidden bg-[#272727]">
      <HeroSection/>
      <InfoSection/>
      <Schedules/>
      <PhotoSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default App
