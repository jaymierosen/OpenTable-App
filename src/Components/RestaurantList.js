import React from 'react';
import RestaurantListItem from './RestaurantListItem';

const RestaurantList = props => {
  return (
    <RestaurantListItem restaurants={props.restaurants} />
  )
}

export default RestaurantList;