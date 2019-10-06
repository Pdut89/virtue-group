const carouselStyles = theme => ({
  dot: {
    backgroundColor: theme.palette.primary.light,
    opacity: .5
  },
  dotActive: {
    backgroundColor: theme.palette.primary.dark
  },
  buttonLeft: {
    position: 'absolute',
    left: 16
  },
  buttonRight: {
    position: 'absolute',
    right: 16
  },
  item: {
    padding: 16,
  },
  container: {
    padding: '16px 0'
  }
})

const dotStyles = {
  width: 12,
  height: 12,
  margin: 3,
  borderRadius: '50%',
  border: 'none',
  outline: 'none',
  cursor: 'pointer'
}

export {
  carouselStyles,
  dotStyles
}
