import HeroSection from "./components/LandingPage/HeroSection"
import InfoSection from "./components/LandingPage/InfoSection"
import Schedules from "./components/LandingPage/Schedules"

function App() {

  return (
    <div className="overflow-x-hidden bg-[#272727]">
      <HeroSection/>
      <InfoSection/>
      <Schedules/>
    </div>
  )
}

export default App
