import React from 'react'
import MySection from '../Components/MySection'
import Reviews from './Reviews'

const MyReviews = () => {
  return (
    <div>
        <MySection link='reviews' component={Reviews} />
    </div>
  )
}

export default MyReviews