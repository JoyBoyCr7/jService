import logo from './logo.svg';
import './App.css';
import Display from './components/Display';
import {useState} from 'react'
import GetQuestion from './components/GetQuestion';

document.body.style = 'background:rgb(137, 207, 240)'

function App() {
// This is setting the Score
  const [score, setScore] = useState(0)
// This controls the current question
  const [question, setQuestion] = useState({})
  // This Shows the answer if True
  const [show, setShow] = useState(false)

  function Increase(){
    setScore(score + question.value )
  }

  function Decease(){
    setScore(score - question.value)
  }

  function Reset(){
    setScore(0)
  }
function scoreHandlers() {
  return (<>
    <button class="btn btn-warning" onClick={Decease}>Decease</button>
        <button class="btn btn-info" onClick={Increase}>Increase</button>
  </>)
}
console.log(question)
  return (
    <div className="App">
      <h1 className='intro'>Welcome To Jeopardy!</h1>
      <h3>Score: {score}</h3>
      <div>
        {question?.value && scoreHandlers()}
        <button  class="btn btn-danger" onClick={Reset}>Reset</button>
      </div>
      <h1> Let's play!</h1>
      <GetQuestion setQuestion={setQuestion} setShow={setShow}/>
      <Display question={question} show={show} setShow={setShow}/>
    </div>
    
  );
}


export default App;
