import { useState } from 'react'
import Login from './pages/Login'
import Layout from './components/Layout'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'

/**
 * App – root component
 * Ab logic thoda advanced hai:
 * - Home / Menu / Contact sab bina login ke dekh sakte ho
 * - Lekin "Order" sirf login ke baad hi allow hai
 * - Agar bina login order karo -> pehle Login pe le jayega, phir order complete karega
 */
const App = () => {
  // login hai ya nahi
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // kaunsa page active hai – home, menu, contact, login
  const [activePage, setActivePage] = useState('home')
  // cart mein kaun kaun se items add hue
  const [cart, setCart] = useState([])
  // user ne koi dish order karni chahi, lekin login nahi tha
  const [pendingOrder, setPendingOrder] = useState(null)

  // login hone ke baad agar koi pending order hai toh usko cart mein daal do
  const handleLogin = () => {
    setIsLoggedIn(true)

    if (pendingOrder) {
      setCart((prev) => [...prev, pendingOrder])
      setPendingOrder(null)
      setActivePage('menu')
    } else {
      setActivePage('home')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setActivePage('home')
    setCart([])
    setPendingOrder(null)
  }

  /**
   * Jab user kisi dish pe "Order" click kare
   * - Agar login nahi hai -> login page open + pendingOrder set
   * - Agar login hai -> direct cart mein add
   */
  const handleOrderRequest = (item) => {
    if (!isLoggedIn) {
      setPendingOrder(item)
      setActivePage('login')
      return
    }

    setCart((prev) => [...prev, item])
    // thoda feedback de dete hain
    window.alert(`"${item.name}" cart mein add ho gaya ✅`)
  }

  // jo page dikhana hai usko decide karte hain
  const renderPage = () => {
    if (activePage === 'menu')
      return <Menu isLoggedIn={isLoggedIn} onOrder={handleOrderRequest} />
    if (activePage === 'contact') return <Contact />
    if (activePage === 'login')
      return <Login onLogin={handleLogin} alreadyInAppLayout />

    return <Home />
  }

  // login page standalone tab use karna ho toh bhi yehhi layout use hoga
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* app ka main wrapper – navbar + pages */}
      <Layout
        activePage={activePage}
        setActivePage={setActivePage}
        onLogout={handleLogout}
        isLoggedIn={isLoggedIn}
        cartCount={cart.length}
      >
        {renderPage()}
      </Layout>
    </div>
  )
}

export default App
