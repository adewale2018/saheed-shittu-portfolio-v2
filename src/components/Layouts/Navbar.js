import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { Home, About, Skills, Projects, Contact } from '../MainComponents';
import Logo from '../../img/logo1.PNG';
import '../../styles/Navbar.scss';

function Navbar() {
  return(
      <div className="Navbar">
          <nav className="Navbar-nav">
            <span className="Navbar-nav-1">
              <NavLink exact to="/">
                <img src={Logo} alt="my logo" className="Navbar-nav__logo"/>
              </NavLink>
            </span>
            <span className="Navbar-nav-2">
              <NavLink exact to="/">Home</NavLink>
              <NavLink exact to="/about">About</NavLink>
              <NavLink exact to="/skills">Skills</NavLink>
              <NavLink exact to="/projects">Projects</NavLink>
              <NavLink exact to="/contact">Contact</NavLink>
            </span>
          </nav>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/skills" component={Skills}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
        
      </div>
  );
}

export default Navbar;
