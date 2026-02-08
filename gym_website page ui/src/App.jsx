import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Theme from './UseContext/Theme'

function App() {
  return (
    
    <Theme>
      <Navbar />
      <Home />
    </Theme>
  )
}

export default App
