import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { About } from "../MainComponents";
import img from "../../img/shittu.png";
import "../../styles/Home.scss";

function Home() {
  return (
    <div className='Home'>
      <div className='Home__leftside'>
        <div className='Home__leftside-img'>
          <img
            src={img}
            alt='Saheed Adewale Shittu'
            className='Home__leftside-image'
          />
        </div>
        <div className='Home__leftside-name'>
          <h2>Saheed A. Shittu</h2>
        </div>
      </div>
      <div className='Home__rightside'>
        <h1>
          <span>A</span>
          <span>Casual Flour Mill Worker</span>
          <span>Turned</span>
          <span>React Frontend Developer</span>
        </h1>
        <NavLink exact to='/about' className='btn btn--white btn--animated'>
          About Me
        </NavLink>
        <Switch>
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </div>
  );
}

export default Home;
