import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  //逻辑其实一样的只是区分了不用应用的AppId
  const token = location.search.split('=')[1]
  if (!token) {
      fetch('http://localhost:3000/login?appId=9LQ8Y3mB').then(res => {
          location.href = res.url
      })
  }
  return (
    <>
     <h1>react19</h1>
    </>
  )
}
export default App
