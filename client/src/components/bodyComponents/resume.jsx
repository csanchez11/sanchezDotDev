import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

  resBox: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '50px 0 0 0',
  },
  button: {
    height: '50px',
    width: '100px',
    fontFamily: 'Titillium Web',
    fontSize: '1em',
    fontWeight: '700',
    margin: '0 25px 25px 25px',
  },
  hover: {
    ':hover': {
        backgroundColor: '#fd4345',
        color: 'white',
        boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
    },
  },
})


export default function Resume(props){

  return (
    <div className={css(styles.resBox)}>
      <button className={css(styles.button, styles.hover)} onClick={event =>  window.location.href='https://sanchezdotdev.s3-us-west-1.amazonaws.com/ResumeChrisSanchez.pdf'}>PDF</button>
      <img src={'https://sanchezdotdev.s3-us-west-1.amazonaws.com/ResumeChrisSanchez.png'}/>
    </div>
  )
}


