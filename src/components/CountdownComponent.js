import React, { useState, useEffect } from 'react'


const questions = [
  "Are you bilingual",
  "Do you code in Multiple Languages",
  "Do you love action movies",
  "Do you SpiderMan movie",
  "Are you Front-end or Full STACK",
  "Do you understand Design concepts",
]

export default function CountdownComponent(props) {
  const INITIAL_QUESTION_TIMER = 5
  const MAXIMUM_QUESTION_NUMBER = questions.length
  const [counter, setCounter] = useState(INITIAL_QUESTION_TIMER)
  const { nb, onDone } = props

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCounter(prev => { return prev - 1 })
    }, 1000)

    return () => {
      clearInterval(intervalID)
    }
  }, [])

  useEffect(() => {
    setCounter(prev => INITIAL_QUESTION_TIMER)
  }, [nb])

  useEffect(() => {
    if (counter === 0) {
      setCounter(prev => INITIAL_QUESTION_TIMER)
      onDone()
    }

  }, [counter])

  if (nb < MAXIMUM_QUESTION_NUMBER) {
    return (
      <div>
        <h1 className='timer'> Timer : {counter}</h1>
        <h1> Question {nb + 1} : {questions[nb]}</h1>

        <button onClick={onDone}> True</button>  <button onClick={onDone}> False</button>
      </div>
    )
  } else {
    return (<h1>  END OF EXAM </h1>)
  }

}
