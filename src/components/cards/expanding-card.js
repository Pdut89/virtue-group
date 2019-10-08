import React from 'react'

import { expandingCardStyles } from './styles'
import { withStyles } from '@material-ui/core/styles'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core'

import TitleBar from '@components/title-bar'

const ExpandingCard = props => {

  const {
    classes,
    variant,
    title,
    children,
    defaultExpanded,
    ...otherProps
  } = props

  return (
    <ExpansionPanel
      classes={{root: classes.paper}}
      defaultExpanded={defaultExpanded}
      {...otherProps}
    >
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <TitleBar
          title={title}
          variant={variant}
        />
      </ExpansionPanelSummary>

      <ExpansionPanelDetails>
        {children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}


export default withStyles(expandingCardStyles)(ExpandingCard)
