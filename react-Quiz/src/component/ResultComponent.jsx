import React, { Component } from 'react'
import './Result.css'
export default class ResultComponent extends Component {
  render() {
    return (
      <div className='resultpage'>
        <h1 className='Resultheading'>Result</h1>
        <div className='result'>
            <p className='line'>You need more practice !</p>
            <p className='score'>Your score is 20%</p>
            <div className='results'>
            <p > Total no. of questions <span>15</span> </p>                      
            <p className="totalque"> Number of attempted questions <span>9</span> </p>      
            <p className="totalque"> Number of correct answers <span>3</span> </p>
            <p className="totalque"> Number of wrong answers <span>6</span> </p>
            </div>
        </div>
            <button className='btn1'>Play Again</button>
            <button className='btn2'>Back to home </button>
      </div>
    )
  }
}
