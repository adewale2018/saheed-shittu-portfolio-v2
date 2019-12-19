import React, { Component } from "react";
import Heading from "../Heading/Heading";
import "../../styles/Projects.scss";
import githubFinder from "../../img/github-finder-2.PNG";
import countriesInformant from "../../img/countries-informant-2.PNG";
import stopWatch from "../../img/stop-watch.PNG";
import colorGame from "../../img/color-game.PNG";
import colorApp from "../../img/color-app.PNG";
import todoApp from "../../img/todo-app.PNG";
import cardDealer from "../../img/card-dealer.PNG";
import numberGame from "../../img/number-game.PNG";
import portfolio from "../../img/portfolio.PNG";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: "01",
          title: "countries-informant",
          img: countriesInformant,
          sourceCode: "https://github.com/adewale2018/countries-app",
          url: "https://world-app.netlify.com/",
          description:
            "This is an app built with REACT and CSS. It enables the user to search for information about a country. It makes use of RESTcountries API. "
        },
        {
          id: "02",
          title: "stopwatch",
          img: stopWatch,
          sourceCode: "https://github.com/adewale2018/timerStopWatch",
          url: "https://adewale2018.github.io/timerStopWatch/",
          description:
            "This is built with HTML, CSS and JavaScript. Stopwatch is a special type of watch used to calculate the time taken in a process or an activity"
        },
        {
          id: "03",
          title: "color-guessing-game",
          img: colorGame,
          sourceCode: "https://github.com/adewale2018/color-Game",
          url: "https://adewale2018.github.io/color-Game/",
          description:
            "This is a game that teaches RGB color which most frontend developers need. It is educative and fun. Check it out and have a fun!"
        },
        {
          id: "04",
          title: "color app",
          img: colorApp,
          sourceCode: "https://github.com/adewale2018/color_project",
          url: "https://color-project.netlify.com/",
          description:
            "You need this if you are a frontend developer. This enables you to pick varities of colors. RGB, RGBA and HEX format are all available. "
        },
        {
          id: "05",
          title: "github users' finder",
          img: githubFinder,
          sourceCode: "https://github.com/adewale2018/github-users-finder",
          url: "https://github-users-finder.firebaseapp.com/",
          description:
            "This is an app built with REACT and BOOTSTRAP for developers. It allows easy search for a github user. It makes use of GITHUB-API. "
        },
        {
          id: "06",
          title: "todo App",
          img: todoApp,
          sourceCode: "https://github.com/adewale2018/todo-with-Hooks",
          url: "https://todo-with-hooks.netlify.com/",

          description:
            "If you need an app to organize your tasks, either by yourself or with others, this app got you covered. It will keep you happy and productive."
        },
        {
          id: "07",
          title: "card dealer ",
          img: cardDealer,
          sourceCode: "https://github.com/adewale2018/card-dealer",
          url: "https://card-dealer.netlify.com/",
          description:
            "This is built with REACT and CSS. It makes use of 'Deck of Cards API'. Check it out and have fun with it. It is awesome!"
        },
        {
          id: "08",
          title: "number guessing game ",
          img: numberGame,
          sourceCode: "https://github.com/adewale2018/numberGuessingGame",
          url: "https://adewale2018.github.io/numberGuessingGame/",
          description:
            "How accurate are you when it comes to guessing a number? You mean you are an expert? Check your accuracy now with this game!"
        },
        {
          id: "09",
          title: "my portfolio",
          img: portfolio,
          sourceCode: "https://github.com/adewale2018/saheed-shittu-portfolio",
          url: "https://saheed-shittu.netlify.com/",
          description:
            "I have spent the last 18 months of my life learning about software development. Here is my porfolio as a junior REACT frontend Developer "
        }
      ]
    };
  }
  render() {
    return (
      <section className='Projects'>
        <Heading title='Projects' />
        <div className='Projects__container-box'>
          {this.state.projects.map(p => (
            <div key={p.title} className='Projects__container-box-1'>
              <div className='card'>
                <h3 className='card__heading'>{p.title}</h3>

                <img src={p.img} alt={p.title} className='card__img' />

                <div className='card__details'>
                  <p className='card__description'>{p.description}</p>
                </div>

                <div className='card__cta'>
                  <a
                    href={p.sourceCode}
                    className='btn btn--white'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Source Code
                  </a>
                  <br />
                  <a
                    href={p.url}
                    className='btn btn--white'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View App
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Projects;
