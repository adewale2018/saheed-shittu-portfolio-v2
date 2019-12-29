import React, { Component, Fragment } from "react";
import Heading from "../../components/Heading/Heading";
import "../../styles/About.scss";
import myImg from "../../img/shittu.png";

class About extends Component {
  static defaultProps = {
    datas: [
      {
        title: "My Background",
        body:
          "Hi, I'm excited that you are reading about me. I'm Saheed Adewale Shittu from Nigeria. I studied mechanical engineering and graduated with a grade of second class upper division. You wonder how I made it to a career in software development? I know you will. Just keep on reading."
      },
      {
        title: "The Coding Journey",
        body:
          "I was a casual worker in a flour mill company before I switched to coding due to my passion for learning new technologies and web development. I was one of the recipients of Google Africa Scholarship with ALC in web development (frontend) track. Unfortunately, I didn't make it to the Udacity Nano-degree program. Despite that, I continued learning using resources from websites like Udemy, Freecodecamp, Udacity, Codecademy, W3Schools, MDN, etc. Thanks to all the instructors, mentors, twitter community and friends who have been of assistance throughtout the journey. Now, it is time to land my first job. Let's do this, let's make it happen!"
      }
    ]
  };
  render() {
    return (
      <section className='About'>
        <Heading title='My transitioning into software development career' />
        <div className='About__container'>
          <div className='About__container-sidebar'>
            <div className='About__container-sidebar-img'>
              <img src={myImg} alt='shittu' />
            </div>
            <div className='About__container-sidebar--1'>
              <p> A <br/> REACT Frontend Developer</p>
            </div>
          </div>
          <div className='About__container-mainbar'>
            {this.props.datas.map(data => (
              <Fragment key={data.title}>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default About;
