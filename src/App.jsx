import react from 'react'
import Main from './components/Header/main.jsx'
import './App.css'
import Quatis from './components/Quatis/quat.jsx'
import Collection from './components/Collections/main.jsx'

function App() {
  return (
    <>
      <Main />
      <Quatis/>
      <br />
      <br />
      <Collection/>
    </>
  )
}

export default App
