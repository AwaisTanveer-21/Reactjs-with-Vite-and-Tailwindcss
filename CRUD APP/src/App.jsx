import React from 'react'
import LoginFoam from './Components/LoginFoam'
// import Postapi from './Pages/Postapi'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Get from './Pages/Get'
import Update from './Pages/Update'
// import Delete from './Pages/Delete'

const App = () => {
  return (
    <div className="bg-blue-500">
      <Navbar/>
<Routes>
  <Route path="/loginpage" element={<LoginFoam/>}/>
  {/* <Route path="/post" element={<Postapi/>}/> */}
 <Route path="/get" element={<Get/>}/>
  <Route path="/update" element={<Update/>}/>
   {/* <Route path="/delete" element={<Delete/>}/> */}
  </Routes>

{/* <LoginFoam/> */}
{/*      
     <Postapi/>
     <Delete/>
     <Get/>
     <Update/> */}
    </div>
  )
}

export default App
