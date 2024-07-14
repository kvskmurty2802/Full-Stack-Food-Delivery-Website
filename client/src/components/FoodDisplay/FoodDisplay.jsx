import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import { food_list } from './../../assets/assets';

const FoodDisplay = () => {
  const {food_list}=useContext(StoreContext)
  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
    </div>
  )
}

export default FoodDisplay
