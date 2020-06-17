import React from 'react';
import Banner from './Banner.jsx';
import Body from './Body.jsx';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  background: {
    maxWidth: '100%',
    height: 800,
    backgroundColor: '#C6C5C5',
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