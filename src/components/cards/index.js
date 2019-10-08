import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import { cardStyles } from './styles'

import TitleBar from '@components/title-bar'
import { Grid, Card as MuiCard } from '@material-ui/core'

const Card = props => {
  const {
    classes,
    width,
    variant,
    children,
    gridStyles,
    cardStyles,
    title,
    icon,
    ...otherProps
  } = props

  return (
    <Grid
      item
      xs={12}
      md={width}
      style={gridStyles}
    >
      <MuiCard
        classes={{root: classes.card}}
        className={classes[`${variant}Card`]}
        style={cardStyles}
        {...otherProps}
      >
        <>
          {title || icon && (
            <TitleBar
              title={title}
              variant={icon}
            />
          )}
          {children}
        </>
      </MuiCard>
    </Grid>
  )
}



Card.defaultProps = {
  variant: 'defualt',
  width: 12,
  gridStyles: {},
  cardStyles: {}
}

export default withStyles(cardStyles)(Card)
