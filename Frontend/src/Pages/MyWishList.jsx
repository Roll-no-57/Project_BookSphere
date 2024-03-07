import React from 'react'
import MySection from '../Components/MySection'
import WishList from './WishList'

const MyWishList = () => {
  return (
    <div>
        <MySection link='wishlist' component={WishList} />
    </div>
  )
}

export default MyWishList