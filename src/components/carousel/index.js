import React, { Component } from 'react'
import windowSize from 'react-window-size'

import Carousel from 'react-multi-carousel'
import Fab from '../buttons/fab'

import 'react-multi-carousel/lib/styles.css'

import { withStyles } from '@material-ui/core/styles'
import { carouselStyles, dotStyles } from './styles'

const responsive = {
  desktop: {
    breakpoint: { max: 10000, min: 900 },
    items: 4,
    slidesToSlide: 0
  },
  tablet: {
    breakpoint: { max: 900, min: 700 },
    items: 3,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
}


class ImageCarousel extends Component {

  render() {
    const { classes, windowWidth, children } = this.props

    const showDots = windowWidth <= responsive.tablet.breakpoint.max
    const isMobile = windowWidth <= responsive.mobile.breakpoint.max

    const ArrowRight = props => (
      <Fab
        variant="arrowRight"
        tooltip="Next"
        classes={{root: classes.buttonRight}}
        {...props}
      />
    )

    const ArrowLeft = props => (
      <Fab
        variant="arrowLeft"
        tooltip="Previous"
        classes={{root: classes.buttonLeft}}
        {...props}
      />
    )

    const Dot = ({ active, ...otherProps }) => (
      <button
        type="button"
        style={dotStyles}
        className={active ? classes.dotActive : classes.dot}
        {...otherProps}
      />
    )

    return (
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={showDots}
        customDot={<Dot/>}
        responsive={responsive}
        ssr={true}
        keyBoardControl={true}
        deviceType="desktop"
        customRightArrow={<ArrowRight/>}
        customLeftArrow={<ArrowLeft/>}
        containerClass={classes.container}
        itemClass={classes.item}
        removeArrowOnDeviceType={["mobile"]}
        autoPlay={isMobile}
        autoPlaySpeed={7000}
        infinite={false}
      >
        {children}
      </Carousel>
    )
  }
}


export default windowSize(
  withStyles(carouselStyles)(ImageCarousel)
)
