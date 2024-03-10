import React, { Component } from 'react'
import './Home.css'
export default class HomeComponent  extends Component {
  render() {
    return (
      <div className='home'>
        <h1 className='heading'>Quiz App</h1>
        <button className='play'>Play</button>
      </div>
    )
  }
}
