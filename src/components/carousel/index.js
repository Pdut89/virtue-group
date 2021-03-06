import React, { Component } from 'react'
import windowSize from 'react-window-size'

import Carousel from 'react-multi-carousel'
import Fab from '../buttons/fab'

import 'react-multi-carousel/lib/styles.css'

import { withStyles } from '@material-ui/core/styles'
import { carouselStyles, dotStyles } from './styles'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1360 },
    items: 4,
    slidesToSlide: 4
  },
  tablet: {
    breakpoint: { max: 1360, min: 720 },
    items: 2,
    slidesToSlide: 2
  },
  mobile: {
    breakpoint: { max: 720, min: 0 },
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
        draggable={false}
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
        infinite={isMobile}
      >
        {children}
      </Carousel>
    )
  }
}


export default windowSize(
  withStyles(carouselStyles)(ImageCarousel)
)
