const expandingCardStyles = theme => ({
  paper: {
    background: theme.palette.paper
  }
})

const cardStyles = theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.paper,
    padding: 24,
  },
  darkCard: {
    backgroundColor: theme.palette.primary.light,
  }
})

export {
  cardStyles,
  expandingCardStyles
}
