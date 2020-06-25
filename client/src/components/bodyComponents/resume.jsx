import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Resume(props){

  return (
    <div>
      <button onClick={event =>  window.location.href='http://localhost:3000/resume'}>View as PDF</button>
      <img src={'https://sanchezdotdev.s3-us-west-1.amazonaws.com/ResumeChrisSanchez.png'}/>
    </div>
  )
}


