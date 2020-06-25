import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class Contact extends React.Component {
  constructor(props){
    super(props)

    this.state = {}
  }
  render(){
    return (
      <div>
        <h1>Contact Me</h1>
        <h3>You can reach me at chrissanchez89@gmail.com</h3>
      </div>
    )
  }

}