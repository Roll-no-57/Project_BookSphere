import React from 'react'
import MySection from '../Components/MySection'
import Orders from './Orders'

const MyOrders = () => {
  return (
    <div>
        <MySection link='orders' component={Orders} />
    </div>
  )
}

export default MyOrders