import React, { PureComponent } from 'react'
import axios from 'axios'

import contactStyles from './styles'
import { withStyles } from '@material-ui/core/styles'

import { Grid } from '@material-ui/core'
import ContactForm from '@components/forms/contact-form'
import AddressCard from '@components/address-card'
import Card from '@components/cards'
import ContactLink from '@components/links/contact-link'

class Contact extends PureComponent {

  componentDidMount() {
    this.awakenServer()
  }

  awakenServer = async() => {
    try {
      const res = await axios.get('https://virtue-mailer.herokuapp.com/')
      if (res.status !== 200) {
        throw new Error(`Invalid response code ${res.status}`)
      }
      console.log({res})
    } catch(err) {
      console.error(err)
    }
  }

  render() {

    const { classes } = this.props

    return (
      <section className={classes.container}>
        <Grid container spacing={2}>
          <Card width={6} variant="dark">
            <ContactLink variant="email" color="white"/>
          </Card>

          <Card width={6} variant="dark">
            <ContactLink variant="phone" color="white"/>
          </Card>

          <Grid item xs={12}>
            <ContactForm/>
          </Grid>

          <Grid item xs={12}>
            <AddressCard/>
          </Grid>
        </Grid>
      </section>
    )
  }
}

export default withStyles(contactStyles)(Contact)
