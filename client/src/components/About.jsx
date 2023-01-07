import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  blank: {
    height: '100px',
    padding: '50px 0',
  },
  about: {
    backgroundColor: 'rgba(57, 79, 244, 0.9)',
    padding: '50px 0',
    margin: '50px 0',
      ':before': {
        position: 'absolute',
        content: "",
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        backgroundColor: 'rebeccapurple',
        transformOrigin: 'top left',
        transform: 'skewY(-3deg)',
        zIndex: '-10',
      },
  },
});


const About = () => {
  return (
    <div>
      <div className={css(styles.blank)}></div>
      <div className={css(styles.about)}>
        <h1>About Me</h1>
        <h3>Generated title about me</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  )
};

export default About;