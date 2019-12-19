import React, { Component } from "react";
import "../../styles/Skills.scss";
import html from "../../img/html.jpg";
import css from "../../img/css1.png";
import bootstrap from "../../img/bootstrap1.png";
import javascript from "../../img/js.png";
import react from "../../img/react2.png";
import node from "../../img/node2.jpg";
import git from "../../img/git.png";
import sass from "../../img/sass1.png";
import materialUi from "../../img/material-ui.png";
import pivotal from "../../img/pivotal.png";
import Heading from "./../Heading/Heading";

class Skills extends Component {
  static defaultProps = {
    skills: [
      { name: "HTML5", imgSrc: html },
      { name: "CSS3", imgSrc: css },
      { name: "BOOTSTRAP4", imgSrc: bootstrap },
      { name: "JavaScript", imgSrc: javascript },
      { name: "REACT", imgSrc: react },
      { name: "MATERIAL-UI", imgSrc: materialUi },
      { name: "SASS", imgSrc: sass },
      { name: "GIT", imgSrc: git },
      { name: "NODE", imgSrc: node },
      { name: "Pivotal-tracker", imgSrc: pivotal }
    ]
  };
  render() {
    return (
      <div className='Skills'>
        <section className='Skills__container'>
          <Heading title='Skills/Tools' />
          <div className='Skills__container-box'>
            {this.props.skills.map(skill => (
              <div key={skill.name} className='Skills__container-box-1'>
                <img
                  src={skill.imgSrc}
                  alt={skill.name}
                  className='Skills__img'
                />
                <h2 className='Skills__heading'>{skill.name}</h2>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Skills;
