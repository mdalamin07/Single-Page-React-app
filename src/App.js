import React from "react";
// import {Switch,Route,Redirect} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import About from "./Component/About";
import ClientSay from "./Component/ClientSay";
import Home from "./Component/Home";
import Portfolio from "./Component/Portfolio";
import Blog from "./Component/Blog";
import Footer from "./Component/Footer";


const App = () => {
  return (
    <>
    <Home/>
    <About/>
    <ClientSay/>
    <Portfolio/>
    <Blog/>
    <Footer/>
    {/* <Navbar/> */}
    {/* <Switch>
      <Route exact path ="/" component = {Home}/>
      <Route exact path ="/about" component = {About}/>
      <Route exact path ="/blog" component = {Blog}/>
      <Route exact path ="/portfolio" component = {Portfolio}/>
      <Route exact path ="/contact" component = {Contact}/>
      <Redirect to="/"/>
    </Switch> */}
    </>
  );
}

export default App;
