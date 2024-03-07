import React from 'react'
import MySection from '../Components/MySection'
import Profile from './User'

const MyProfile = () => {
  return (
    <div>
        <MySection link='profile' component={Profile} />
    </div>
  )
}

export default MyProfile