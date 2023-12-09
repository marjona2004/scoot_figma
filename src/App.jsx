import {Switch, Route } from "react-router-dom";
import { Footer } from "./components/layout/footer";
import { Navbar } from "./components/layout/navbar";
import { About } from "./pages/about/About";
import { Careers } from "./pages/careers/Careers";
import { Home } from "./pages/home";
import { Footer_nav } from "./components/layout/footer_nav";
import { Location } from "./pages/location/Location";

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
          <Route path="/home">
             <Home/>
          </Route>
             <Route path="/about">
             <About/>
          </Route>
          <Route path="/careers">
             <Careers/>
          </Route>
          <Route path="/location">
           <Location/>
          </Route>
          
      </Switch>
      <Footer/>
      <Footer_nav/>
    </div>
  );
}

export default App;
