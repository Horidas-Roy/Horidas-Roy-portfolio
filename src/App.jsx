import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import { Tech,Works,Feedbacks,Contact,StarsCanvas} from "./components"

const App = () => {
  return(
    <BrowserRouter>
        <div className="relative z-0 bg-primary">
             <div className="bg-hero-pattern h-[100vh] bg-no-repeat bg-cover bg-center">
                     <Navbar></Navbar>
                     <Hero></Hero>
              </div>
              <About></About>
              <Experience></Experience>
              <Tech></Tech>
              <Works></Works>
              <Feedbacks></Feedbacks>
              <div className="relative z-0">
                  <Contact></Contact>
                  <StarsCanvas></StarsCanvas>
              </div>
        </div>
    </BrowserRouter>
  )
};

export default App;
