import React from 'react'

import { titleBarStyles } from './styles'
import { withStyles } from '@material-ui/core/styles'

import SendIcon from '@material-ui/icons/Send'
import HomeIcon  from '@material-ui/icons/Home'
import MailOutlineIcon  from '@material-ui/icons/MailOutline'

import {
  Typography,
  Avatar,
  Toolbar
} from '@material-ui/core'

const iconVariants = {
  send: <SendIcon/>,
  home: <HomeIcon />,
  mail: <MailOutlineIcon/>
}

const TitleBar = props => {

  const {
    classes,
    variant,
    title,
    ...otherProps
  } = props

  const icon = variant ? iconVariants[variant] : null

  return (

        <Toolbar classes={{root: classes.toolbar}}>
          {icon && (
            <Avatar>
              {icon}
            </Avatar>
          )}

          <Typography
            classes={{h6: classes.title}}
            variant="h6"
            color="primary"
          >
            {title}
          </Typography>
        </Toolbar>
  )
}


export default withStyles(titleBarStyles)(TitleBar)
