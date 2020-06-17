import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({

  innerBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

})


function Banner(props) {
  return (
      <div className={css(styles.innerBox)}>
        <h1>Hi, I'm Chris Sanchez and I am a developer</h1>
        <img src={'https://sanchezdotdev.s3-us-west-1.amazonaws.com/Portrait.png'}></img>
      </div>
  );
};

export default Banner;