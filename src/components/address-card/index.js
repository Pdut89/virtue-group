import React from 'react'

import {
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'

import ExpandingCard from '@components/cards/expanding-card'

import addressData from './data'

const AddressCard = () => (
  addressData.map(({title, variant, data}, index) => (
    <ExpandingCard
      key={title}
      variant={variant}
      title={title}
    >
      <List dense>
        {data.map(line => (
          <ListItem key={line}>
            <ListItemText>
              {line}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </ExpandingCard>
  ))
)


export default AddressCard
