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
  }

  render(){
    if (this.state.portfolio) {
      return (
        <Portfolio />
      )
    } else if (this.state.resume) {
      return (
        <Resume />
      )
    } else if (this.state.contact) {
      return (
        <Contact />
      )
    }
  }
}