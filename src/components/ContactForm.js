import React, { PureComponent } from 'react'

import { withStyles } from '@material-ui/core/styles'

import {
  Grid, Card, TextField, Button, FormControl, InputLabel, Input, Typography
} from '@material-ui/core'

import MailOutlineIcon from '@material-ui/icons/MailOutline'

import MaskedInput from 'react-text-mask'

const styleOverrides = theme => ({
  card: {
    padding: 30,
    background: theme.palette.paper
  },
  button: {
    marginTop: 22
  }
})

function TextMaskCustom(props) {
  const { inputRef, ...other } = props
  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={['(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      type="tel"
    />
  )
}

class ContactForm extends PureComponent {

  state = {
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  }

  handleChange = event => {
    const { name , value } = event.target
    this.setState({[name]: value})
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render () {

    const { name, surname, email, phoneNumber, subject, message } = this.state
    const { classes } = this.props

    return (
      <Card classes={{root: classes.card}}>

        <Typography gutterBottom variant="h5" color="primary">
          Send us a message
        </Typography>
        <MailOutlineIcon/>

        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">

          <Grid container spacing={16}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="name"
                label="Name"
                value={name}
                type="text"
                onChange={this.handleChange}
                margin="normal"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                name="surname"
                label="Surname"
                value={surname}
                type="text"
                onChange={this.handleChange}
                margin="normal"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                name="email"
                value={email}
                autoComplete="email"
                margin="normal"
                onChange={this.handleChange}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="formatted-text-mask-input">Phone number</InputLabel>
                <Input
                  id="formatted-text-mask-input"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={this.handleChange}
                  inputComponent={TextMaskCustom}
                />
              </FormControl>
            </Grid>
          </Grid>

          <TextField
            fullWidth
            label="Subject"
            name="subject"
            value={subject}
            onChange={this.handleChange}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Message"
            name="message"
            value={message}
            onChange={this.handleChange}
            multiline
            rows="3"
            rowsMax="4"
            margin="normal"
          />

        <Button classes={{root: classes.button}} fullWidth type="submit">Submit</Button>
        </form>
      </Card>
    )
  }
}

export default withStyles(styleOverrides)(ContactForm)
