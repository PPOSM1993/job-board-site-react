import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Search from './components/SearchDiv/Search'
import Value from './components/ValueDiv/Value'
import Jobs from './components/JobDiv/Jobs'
import Footer from './components/FooterDiv/Footer'

const App = () => {

  return (
    <>
      <div className='container w-[85] m-auto'>
        <Navbar />
        <Search />
        <Jobs />
        <Value />
        <Footer />
      </div>
    </>
  )
}

export default App
