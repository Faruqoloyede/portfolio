import React from 'react'
import Home from './sections/Home'
import Profile from './components/Profile'
import Menues from './components/Menues'

const App = () => {
  return (
    <main className='max-w-[1440px] mx-auto gap-10 flex lg:px-12 md:px-8 px-4'>
      <Profile />
      <Home />
      <Menues />
    </main>
  )
}

export default App