const expandingCardStyles = theme => ({
  paper: {
    background: theme.palette.paper
  },
  toolbar: {
    padding: 0,
    minHeight: 'auto'
  },
  title: {
    marginLeft: 20
  }
})

const cardStyles = theme => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.paper,
    padding: 24,
  },
  darkCard: {
    backgroundColor: theme.palette.primary.light,
  }
})

const serviceCardStyles = theme => ({
  container: {
    ...theme.container,
    height: '100%',
    margin: 0
  },
  cardContainer: {
    margin: '0 auto',
    display: 'flex',
    maxWidth: 200,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
    padding: 16
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 400,
    textTransform: 'uppercase',
    marginTop: 16
  },
  cardDescription: {
    marginTop: 16,
    height: 50,
    overflow: 'hidden',
    fontSize: 16,
    opacity: .6,
    textAlign: 'center'
  }
})

export {
  cardStyles,
  expandingCardStyles,
  serviceCardStyles
}
