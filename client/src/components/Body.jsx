import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Resume from './bodyComponents/resume.jsx';
import Portfolio from './bodyComponents/portfolio.jsx';
import Contact from './bodyComponents/contact.jsx';

const styles = StyleSheet.create({

  outerBox: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  buttonBox: {
    margin: '50px 0 50px 0',
  },
  button: {
    height: '50px',
    width: '100px',
    fontFamily: 'Titillium Web',
    fontSize: '1em',
    fontWeight: '700',
    margin: '0 25px 0 25px',
  },
  hover: {
    ':hover': {
        backgroundColor: '#fd4345',
        color: 'white',
        boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
    },
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
      <div className={css(styles.outerBox)}>
        <div className={css(styles.buttonBox)}>
          <button id='portfolio' className={css(styles.button, styles.hover)} onClick={this.clickHandler}>Portfolio</button>
          <button id='resume' className={css(styles.button, styles.hover)} onClick={this.clickHandler}>Resume</button>
          <button id='contact' className={css(styles.button, styles.hover)} onClick={this.clickHandler}>Contact</button>
        </div>
        <div>
          {element}
        </div>
      </div>
    )

  }
}

