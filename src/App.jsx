import react from 'react'
import Main from './components/Header/main.jsx'
import './App.css'
import Quatis from './components/Quatis/quat.jsx'
import Collection from './components/Collections/main.jsx'
import Cities from './components/Popular_cities/cities.jsx'
import GetApp  from './components/getappsomato/getapp.jsx'
import Drop from './components/Dropbox/drop.jsx'
import Footer from './components/Footer/footer.jsx'
function App() {
  return (
    <>
      <Main />
      <Quatis/>
      <br />
      <br />
      <Collection/>
      <br />
      <Cities/>
      <br />
      <br />
      <GetApp/>
      <Drop/>
      <br />
      <br />
      <Footer></Footer>
    </>
  )
}

export default App
