import React from 'react'

import homeImageHq from '@images/home-image-hq.png'
import homeImageLq from '@images/home-image-lq.png'

import { Typography } from '@material-ui/core'
import ImageLoader from '@components/image-loader'

const Home = () => (
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
  </>
)

export default Home
