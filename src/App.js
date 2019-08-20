import React, { Component, Fragment } from 'react';
import anime from 'animejs'
import './App.css';
import EventCategory from './EventCategory';
// import { Link } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {selectedCategory: 'aerospace'};
    this.timeOfIndiAnimation = 2000;
    this.delay=150;
  }

  componentDidUpdate = () => {
    var id = this.state.selectedCategory;
  };

  updateState = (id) => {
    this.setState({
      selectedCategory: id
    });
  }

  render () {
    var ele  = ["aerospace", "coding", "robotics", "drama", "dance", "quizzes", "solartech"];
    var eventsInCategory = {
      "aerospace" : ["CoDecode", "Ultimate Coding Showdown", "Code Relay", "Code Mania", "Robo Rush", "Robo War", "Lorem Ipsum", "Dolor Sit Amet"],
      "coding" : ["CoDecode", "Ultimate Coding Showdown", "Code Relay", "Code Mania", "Robo Rush", "Robo War"],
      "robotics" : ["CoDecode", "Ultimate Coding Showdown", "Code Relay", "Code Mania", "Robo Rush", "Robo War", "Lorem Ipsum", "Dolor Sit Amet", "Lorem Ipsum", "Dolor Sit Amet"],
      "drama" : ["CoDecode", "Ultimate Coding Showdown", "Code Relay", "Code Mania", "Robo Rush", "Robo War", "Lorem Ipsum", "Dolor Sit Amet", "Lorem Ipsum", "Dolor Sit Amet", "Lorem Ipsum", "Dolor Sit Amet"],
      "dance" : ["CoDecode", "Ultimate Coding Showdown", "Code Relay"],
      "quizzes" : ["CoDecode", "Ultimate Coding Showdown", "Code Relay", "Code Mania", "Robo Rush", "Robo War", "Lorem Ipsum"],
      "solartech" : ["CoDecode", "Ultimate Coding Showdown", "Code Relay", "Code Mania", "Robo Rush", "Robo War", "Lorem Ipsum", "Dolor Sit Amet", "Lorem Ipsum", "Dolor Sit Amet"]
    };
    
    var selectedCategory = this.state.selectedCategory;
    return (
      <div className="eventsinfo-main">
        <div className=" demo-4 loading">
          <div className="grid">
            { ele.map((iele, key) => 
                <EventCategory
                  onClick={this.updateState.bind(this,iele.toLowerCase())}
                  key={key}
                  name={iele.toUpperCase()}
                  id={iele.toLowerCase()}
                  num_ele={ele.length}
                  selected={iele.toLowerCase() == selectedCategory}
                />
            )}
          </div>
          <nav class="menu menu--adsila">
            {eventsInCategory[selectedCategory].map((event, key) => 
            <a class="menu__item" to="#">
              <span class="menu__item-name" id={key}>{event}</span>
              <span class="menu__item-label">A brief description of the event</span>
            </a>
            )}
          </nav>
        </div>
      </div>
    );
  }
}

export default App;