import React from 'react'

import Footer from '../footer'
import ImageLoader from '../image-loader'

import background from '@images/background.svg'
import bottomImage from '@images/page-bottom.svg'

import backgroundStyles from './styles'

const Background = ({children}) => (
  <div
    style={backgroundStyles.pageContainer}
  >
    <ImageLoader
      style={backgroundStyles.background}
      hdImage={background}
      alt="background bottom"
      variant="background"
    />

    <div style={backgroundStyles.pageContent}>
      {children}
    </div>

    <ImageLoader
      style={backgroundStyles.bottomImage}
      hdImage={bottomImage}
      alt="background bottom"
      variant="background"
    />
    <Footer />
  </div>
)



export default Background
