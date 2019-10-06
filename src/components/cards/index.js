import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { cardStyles } from './styles'

import { Grid, Card as MuiCard } from '@material-ui/core'

const Card = props => {
  const {
    classes,
    width,
    variant,
    children,
    ...otherProps
  } = props

  return (
    <Grid
      item
      xs={12}
      md={width}
    >
      <MuiCard
        classes={{root: classes.card}}
        className={classes[`${variant}Card`]}
        {...otherProps}
      >
        {children}
      </MuiCard>
    </Grid>
  )
}



Card.defaultProps = {
  variant: 'defualt',
  width: 12
}

export default withStyles(cardStyles)(Card)
