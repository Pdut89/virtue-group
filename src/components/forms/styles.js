function getBackground (type) {
  switch(type) {
    case 'error':
      return 'linear-gradient(to bottom, rgba(169,3,41,1) 0%,rgba(143,2,34,1) 44%,rgba(109,0,25,1) 100%)'
      break
    default:
      return 'linear-gradient(to bottom, rgba(246,248,249,1) 0%,rgba(229,235,238,1) 50%,rgba(215,222,227,1) 51%,rgba(245,247,249,1) 100%)'
  }
}

function getColor (type) {
  switch(type) {
    case 'error':
      return '#fff'
      break
    default:
      return '#162730'
  }
}

const formStyles = {
  form: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap'
  },
  button: {
    marginTop: 22,
    height: 40
  },
  snackbar: function(type){
    return ({
      fontSize: '16px',
      maxWidth: '94vw',
      fontFamily: 'Roboto, Arial',
      fontWeight: '400',
      right: '2vw',
      backgroundColor: 'rgb(255,255,255)',
      background: getBackground(type),
      color: getColor(type),
      pointerEvents: 'none',
      padding: '12px 16px',
      border: '1px solid #666',
      borderRadius: '5px'
    })
  }
}

export default formStyles
