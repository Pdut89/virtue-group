import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import ImageLoader from '../image-loader'
import Carousel from '../carousel'

import electrical from '@images/icons/services/electrical-dark.svg'
import maintenance from '@images/icons/services/maintenance-dark.svg'
import plumbing from '@images/icons/services/plumbing-dark.svg'
import construction from '@images/icons/services/construction-dark.svg'

import { withStyles } from '@material-ui/core/styles'
import { serviceCardStyles } from './styles'

import { servicesData } from '@utils/data'

import { Typography, Card } from '@material-ui/core'

const serviceIcons = {
  electrical,
  maintenance,
  plumbing,
  construction
}

class ServiceCards extends PureComponent {

  renderCard = ({ name, description, route }) => {
    const { classes } = this.props

    return (
      <Link
        key={name}
        to={route}
        className={classes.cardContainer}
      >
        <Card
          className={classes.card}
        >
          <ImageLoader
            style={{height: 100, width: 100}}
            hdImage={serviceIcons[name]}
            alt={`${name}-icon`}
          />
          <Typography
            variant="subtitle1"
            classes={{subtitle1: classes.cardTitle}}>
            {name}
          </Typography>
          <Typography
            classes={{body1: classes.cardDescription}}>
            {description}
          </Typography>
        </Card>
      </Link>
    )
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.container}>
        <Carousel>
          {servicesData.map(service => this.renderCard(service))}
        </Carousel>
      </div>
    )
  }
}


export default withStyles(serviceCardStyles)(ServiceCards)
