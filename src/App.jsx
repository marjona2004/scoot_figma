import {Switch, Route } from "react-router-dom";
import { Footer } from "./components/layout/footer";
import { Navbar } from "./components/layout/navbar";
import { About } from "./pages/about/About";
import { Careers } from "./pages/careers/Careers";
import { Home } from "./pages/home";
import { Footer_nav } from "./components/layout/footer_nav";
import { Location } from "./pages/location/Location";
import { useEffect, useState } from "react";





function App() {
const [theme,setTheme] =useState("light")

useEffect(()=>{
if(theme==="dark"){
 document.documentElement.classList.add("dark")
}else{
  document.documentElement.classList.remove("dark")
}


},[theme])

const changeThemeHandler=()=>{
  setTheme(theme==="dark" ? "ligth":"dark")
}

  return (
    <div  className="dark:bg-slate-900">
      <Navbar changeThemeHandler={changeThemeHandler}/>
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
