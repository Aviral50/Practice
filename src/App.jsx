import React, { createContext } from 'react'
import ChildA from './components/ChildA'

const data=createContext()
function App() {
  const name="Aviral Mishra"
  return (
    <div>
      <data.Provider value={name}>
      <ChildA/>
     </data.Provider>
    </div>
  )
}

export default App
export {data}