import React from 'react'
import { Element, Link as LinkScroll } from 'react-scroll'
import Profile from '../components/Profile'
import Main from '../components/Main'
import Menues from '../components/Menues'

const Home = () => {
  return (
    <section className='relative pt-24'>
        <Element name='home'>
            <div className='max-w-[1420px] mx-auto flex items-center gap-10 lg:px-4 md:px-8 px-4'>
                <Profile />
                <Main />
                <Menues />
            </div>
        </Element>
    </section>
  )
}

export default Home