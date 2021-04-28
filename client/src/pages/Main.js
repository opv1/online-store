import React from 'react'
import {
  Header,
  Navbar,
  Slider,
  Categories,
  Examples,
  Offers,
  Subscribe,
  Info,
  Footer,
} from 'components/index'

const Main = () => {
  return (
    <div className='main'>
      <Header />
      <Navbar />
      <Slider />
      <Categories />
      <Examples />
      <Offers />
      <Subscribe />
      <Info />
      <Footer />
    </div>
  )
}

export default Main
