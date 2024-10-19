import './App.css'
import Counter from './Counter'
import Friends from './Friends-6'
import Team from './Team'
import User from './Users-5'
import Friends from './Friends-6'
import Friend from './Friend-6'
function App() {

  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = ()=>{
    alert('button 2 clicked')
  }

  const addToFive =(num)=>{
    alert(num + 5)
  }
  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Friends></Friends>

      <User></User>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert('third btn click')}}>Third</button>
      {/* bejailla */}
      <button onClick={()=> addToFive(5)}>Four</button>
    </>
  )
}

export default App
