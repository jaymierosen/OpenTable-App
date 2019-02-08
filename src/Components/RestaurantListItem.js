import React from 'react';
import { List, ListItem } from './StyledComponents';
import { numToDollarSign } from '../Functions/helper-functions';

const RestaurantListItem = props => {
  return (
    <React.Fragment>
      {props.restaurants.map((restaurant, i) => {
        return (
          <List key={`${i}`}>
            <ListItem key={`restaurant-name-${i}`}><strong>Name:</strong> {restaurant.name}</ListItem>
            <ListItem key={`restaurant-address-${i}`}><strong>Address:</strong> {restaurant.address}</ListItem>
            <ListItem key={`restaurant-price-${i}`}><strong>Price:</strong>
              {numToDollarSign(restaurant.price)}
            </ListItem>
          </List>
        )
      })}
    </React.Fragment>
  )
}

export default RestaurantListItem;