import React from 'react'
// import productsData from '../Data/ProductsData'
import IndexSlider1 from './ImageSwiper'
import ImagerSwiper from './IndexSlider'
import Products from './Products'

const Index = () => {

    // console.log(productsData)

  return (
    <>
      {/* <div>Index</div> */}
      <IndexSlider1 />
      <ImagerSwiper />
      <Products />
    </>
  )
}

export default Index