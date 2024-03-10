import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import HomeComponent from './component/HomeComponent '
import QuizComponent from './component/QuizComponent'
import ResultComponent from './component/ResultComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <HomeComponent/> */}
      <QuizComponent/>
      {/* <ResultComponent/> */}
    </div>
  )
}

export default App
