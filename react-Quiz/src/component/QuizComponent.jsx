import React, { Component } from 'react'
import './Quiz.css'

export default class QuizComponent extends Component {
  constructor() {
    super()
    this.state = {
      Array_OF_questions:
        [
          {
            "question": "What temperature does water boil at?",
            "optionA": "50 degrees Celcius",
            "optionB": "25 degrees Celcius",
            "optionC": "100 degrees Celcius",
            "optionD": "150 degrees Celcius",
            "answer": "100 degrees Celcius"
          },

          {
            "question": "Who wrote Julius Caesar, Macbeth and Hamlet?",
            "optionA": "Wole Soyinka",
            "optionB": "William Shakespeare",
            "optionC": "Ngozi Chimamanda Adichie",
            "optionD": "Dan Brown",
            "answer": "William Shakespeare"
          },

          {
            "question": "What did the crocodile swallow in Peter Pan?",
            "optionA": "A Book",
            "optionB": "A Computer",
            "optionC": "A pair of shoes",
            "optionD": "Alarm Clock",
            "answer": "Alarm Clock"
          },

          {
            "question": "Which is the only mammal that can’t jump?",
            "optionA": "Dog",
            "optionB": "Elephant",
            "optionC": "Goat",
            "optionD": "Lion",
            "answer": "Elephant"
          },

          {
            "question": "Who lived at 221B, Baker Street, London?",
            "optionA": "Tony Stark",
            "optionB": "Morgan Freeman",
            "optionC": "Sherlock Holmes",
            "optionD": "Samuel L. Jackson",
            "answer": "Sherlock Holmes"
          },

          {
            "question": "What colour is a panda?",
            "optionA": "Green and Yellow",
            "optionB": "Blue and Red",
            "optionC": "Green and White",
            "optionD": "Black and White",
            "answer": "Black and White"
          },

          {
            "question": "Where is the smallest bone in the human body?",
            "optionA": "The Chest",
            "optionB": "The Ear",
            "optionC": "The Legs",
            "optionD": "The Hands",
            "answer": "The Ear"
          },

          {
            "question": "What does the roman numeral C represent?",
            "optionA": "100",
            "optionB": "10",
            "optionC": "10,000",
            "optionD": "1,000,000",
            "answer": "100"
          },

          {
            "question": "What takes place in Hong Kong's Happy Valley?",
            "optionA": "Chicken Wrestling",
            "optionB": "Horse racing",
            "optionC": "Street Racing",
            "optionD": "Arm Wrestling",
            "answer": "Horse racing"
          },

          {
            "question": "Who painted the Mona Lisa?",
            "optionA": "Alexander Graham Bell",
            "optionB": "Sir Isaac Newton",
            "optionC": "Leonardo Da Vinci",
            "optionD": "Albert Einstein",
            "answer": "Leonardo Da Vinci"
          },

          {
            "question": "What’s the most important book in the Moslem religion?",
            "optionA": "The Koran",
            "optionB": "The Dictionary",
            "optionC": "The Bible",
            "optionD": "The Chemistry text Book",
            "answer": "The Koran"
          },

          {
            "question": "What’s the capital of Ethiopia?",
            "optionA": "Cape Town",
            "optionB": "San Francisco",
            "optionC": "Abuja",
            "optionD": "Syndey",
            "answer": "Addis Ababa"
          },

          {
            "question": "How many squares are there on a chess board?",
            "optionA": "128",
            "optionB": "64",
            "optionC": "32",
            "optionD": "256",
            "answer": "64"
          },

          {
            "question": "Who invented the electric light bulb?",
            "optionA": "Tom Cruise",
            "optionB": "Barack Obama",
            "optionC": "Wole Soyinka",
            "optionD": "Thomas Edison",
            "answer": "Thomas Edison"
          },

          {
            "question": "What are the first three words of the bible?",
            "optionA": "be with everyone",
            "optionB": "Again Jesus asked",
            "optionC": "In the beginning",
            "optionD": "At that time",
            "answer": "In the beginning"
          }
        ],
      Index_Of_Question: 0
    }
  }

  Previous_Question = () => {
    this.setState(previousState => ({
      Index_Of_Question: Math.max(0, previousState.Index_Of_Question - 1)
    }));
  }

  Next_Question = () => {
    this.setState(previousState => ({
      Index_Of_Question: Math.min(previousState.Array_OF_questions.length - 1, previousState.Index_Of_Question + 1)
    }));
  }

  Quit_Quiz = () => {
    const Quiting = window.confirm("Are you sure you want to quit?");
    if (Quiting) {
      this.setState({ Index_Of_Question: 0 });
    }
  }

  render() {
    return (
      <div className='quiz'>
        <div className='questionhead'>  
        <p className='num'>1 of 15</p>
        <h1 className='questionheadind'>Question</h1>
        </div>
        <p className='question'>{this.state.Array_OF_questions[this.state.Index_Of_Question].question}</p>
        <div className='option'>
            <button className='op'>{this.state.Array_OF_questions[this.state.Index_Of_Question].optionA}</button>
            <button className='op'>{this.state.Array_OF_questions[this.state.Index_Of_Question].optionB}</button>
            <button className='op'>{this.state.Array_OF_questions[this.state.Index_Of_Question].optionC}</button>
            <button className='op'>{this.state.Array_OF_questions[this.state.Index_Of_Question].optionD}</button>
        </div>
        <div className='buttons'>
            <button className='pre' onClick={this.Previous_Question}>Previous</button>
            <button className='nxt' onClick={this.Next_Question}>Next</button>
            <button className='quit' onClick={this.Quit_Quiz}>Quit</button>
          </div>
      </div>
    )
  }

}