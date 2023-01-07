import React, { useState, useEffect } from 'react';
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
    '@media (max-width: 768px)': {
      display: 'flex',
      flexDirection: 'column-reverse',
      justifyContent: 'space-around',
      alignItems: 'center',
      fontSize: '2em',
    }
  },
  image: {
    height: '40%',
    width: '40%',
  },
  fontBox: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px',
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
  },
  hr: {
    marginBlockStart: '-0.5em',
    marginBlockEnd: '-0.5em',
  }

})

const occupationArray = ["WEB DEVELOPER", "PERPETUAL STUDENT", "ROCK CLIMBER", "TACO ENTHUSIAST", "PROBLEM SOLVER", "TRAIL RUNNER", "COFFEE DRINKER", "HOT SAUCE BOSS"];

function Banner(props) {
  const [occupation, setOccupation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOccupation(occupation => occupationArray[occupation + 1] ? occupation + 1 : occupation = 0);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
      <div className={css(styles.innerBox, styles.small)}>
        <div className={css(styles.fontBox)}>
          <h1 className={css(styles.h1)}>CHRIS SANCHEZ</h1>
          <hr className={css(styles.hr)}></hr>
        <h4 className={css(styles.h4)}>{occupationArray[occupation]}</h4>
        </div>
        <img src={'https://sanchezdotdev.s3-us-west-1.amazonaws.com/circPortrait.png'} className={css(styles.image)}></img>
      </div>
  );
};

export default Banner;