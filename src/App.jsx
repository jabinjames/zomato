import Main from './components/Header/main.jsx'
import Quatis from './components/Quatis/quat.jsx'
import Collection from './components/Collections/main.jsx'
import Cities from './components/Popular_cities/cities.jsx'
import GetApp  from './components/getappsomato/getapp.jsx'
import Drop from './components/Dropbox/drop.jsx'
import Footer from './components/Footer/footer.jsx'
import Header from './components/Add_Restaurants/Header/header.jsx'

function App() {
  return (
    <>
       {/* import Linkss from './components/LINks/main.jsx'
      <Linkss/> */}
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
      <Header></Header>
    </>
  )
}

export default App
