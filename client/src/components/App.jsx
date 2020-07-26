import React from 'react';
import Banner from './Banner.jsx';
import Body from './Body.jsx';
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

})


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <div className={css(styles.background)}>
        <Banner />
        <Body />
      </div>
    );
  }
}