import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Resume from './bodyComponents/resume.jsx';
import Portfolio from './bodyComponents/portfolio.jsx';
import Contact from './bodyComponents/contact.jsx';

const styles = StyleSheet.create({

  innerBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

})

export default class Body extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      portfolio: true,
      resume: false,
      contact: false,
    }
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e){
    if (e.target.id === 'resume'){
      this.setState({
        portfolio: false,
        contact: false,
        resume: true,
      })
    } else if (e.target.id === 'contact'){
      this.setState({
        portfolio: false,
        contact: true,
        resume: false,
      })
    } else if (e.target.id === 'portfolio'){
      this.setState({
        portfolio: true,
        contact: false,
        resume: false,
      })
    }
  }

  render(){
    let element;

    if (this.state.portfolio) {
      element = <Portfolio />;
    } else if (this.state.resume) {
      element = <Resume />;
    }  else if (this.state.contact) {
      element = <Contact />;
    }

    return (
      <div>
        <button id='portfolio' onClick={this.clickHandler}>Portfolio</button>
        <button id='resume' onClick={this.clickHandler}>Resume</button>
        <button id='contact' onClick={this.clickHandler}>Contact</button>
        {element}
      </div>
    )

  }
}

