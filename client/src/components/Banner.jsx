import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({

  innerBox: {
    fontSize: '3em',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    lineHeight: '140%',
  },
  small: {
    '@media (max-width: 750px)': {
      display: 'flex',
      flexDirection: 'column-reverse',
      justifyContent: 'space-around',
      alignItems: 'center',
      fontSize: '1em',
    }
  },
  image: {
    height: '40%',
    width: '40%',
  },
  fontBox: {
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'flex-end',
  },
  h1: {
    fontWeight: '900',
    textAlign: 'right',
  },
  h4: {
    fontWeight: '400',
    topMargin: '50px',
    // lineHeight: '90%',
  }

})


function Banner(props) {
  return (
      <div className={css(styles.innerBox, styles.small)}>
        <div className={css(styles.fontBox)}>
          <h1 className={css(styles.h1)}>CHRIS SANCHEZ</h1>
          <hr></hr>
          <h4 className={css(styles.h4)}>WEB DEVELOPER</h4>
        </div>
        <img src={'https://sanchezdotdev.s3-us-west-1.amazonaws.com/circPortrait.png'} className={css(styles.image)}></img>
      </div>
  );
};

export default Banner;