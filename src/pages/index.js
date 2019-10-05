import React from 'react'

import homeStyles from './styles'
import { withStyles } from '@material-ui/core/styles'

import homeImageHq from '@images/home-image-hq.png'
import homeImageLq from '@images/home-image-lq.png'

import { Typography } from '@material-ui/core'
import ServiceCards from '@components/cards/service-cards'
import ImageLoader from '@components/image-loader'

const Home = ({ classes }) => (
  <>
    <div className="homeImage">
      <ImageLoader
        hdImage={homeImageHq}
        sdImage={homeImageLq}
        style={{paddingTop: 'calc(50vh - 100px)'}}
        alt="home-background"
        variant="background"
      />
    </div>

    <Typography
      align="center"
      variant="h4"
      classes={{
        h4: classes.subtitle
      }}
    >
      Services
    </Typography>

    <ServiceCards/>
  </>
)

export default withStyles(homeStyles)(Home)
