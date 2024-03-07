import React from 'react'
import MySection from '../Components/MySection'
import CartPage from './cartPage'

const MyCart = () => {
  return (
    <div>
        <MySection link='cart' component={CartPage} />
    </div>
  )
}

export default MyCart