import { BrowserRouter } from "react-router-dom";

import { About, Experience, Hero, Navbar, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-white">
      <div>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Works />
      <Experience />

    </div>
    </BrowserRouter>
  )
}

export default App
