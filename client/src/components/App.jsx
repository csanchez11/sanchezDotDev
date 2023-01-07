import React from 'react';
import Banner from './Banner.jsx';
import Body from './Body.jsx';
import About from './About.jsx';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  background: {
    fontFamily: 'Titillium Web',
    marginTop: '100px',
    maxWidth: '100%',
    height: '100%',
    minHeight: '750px',
    backgroundColor: '#fff',
  },
  footer: {
    display: 'block',
    textAlign: 'center',
    backgroundColor: 'rgba(57, 79, 244, 0.9)',
    padding: '25px 0 20px',
  }
});



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <div className={css(styles.background)}>
        <Banner className="Banner" id="Banner"/>
        <About className="About" id="About"/>
        <Body className="Body" id="Body"/>
        <footer className={css(styles.footer)}><p>© 2020 - 2021 | Designed & coded by Chris Sanchez </p> </footer>
      </div>
    );
  }
}