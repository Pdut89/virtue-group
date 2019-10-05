import React, { PureComponent } from 'react'
import axios from 'axios'

import formStyles from './styles'

import {
  validateField,
  validateForm
} from '@utils/validation'

import {
  Button,
  CircularProgress
} from '@material-ui/core'

import Input from '@components/inputs'
import ExpandingCard from '../cards/expanding-card'

class ContactForm extends PureComponent {

  state = {
    name: '',
    company: '',
    emailAddress: '',
    phoneNumber: '',
    subject: '',
    message: '',
    validationErrors: {},
    previousErrors: [],
    isLoading: false
  }

  resetForm = () => {
    this.setState({
      name: '',
      company: '',
      emailAddress: '',
      phoneNumber: '',
      subject: '',
      message: '',
      validationErrors: {},
      previousErrors: []
    })
  }

  handleChange = event => {
    const {
      previousErrors,
      validationErrors: errors
    } = this.state

    let validationErrors = {...errors}
    const { name , value } = event.target

    if (previousErrors.includes(name)) {
      const newErrors = validateField(event.target)

      if (Object.entries(newErrors).length) {
        validationErrors = {...validationErrors, ...newErrors}
      } else {
        delete validationErrors[name]
      }
    }

    this.setState({
      [name]: value,
      validationErrors
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const validationErrors = validateForm(event.target)

    const errorsArr = Object.entries(validationErrors)

    if (errorsArr.length) {
      const previousErrors = errorsArr.map(([key]) => key)
      return this.setState({validationErrors, previousErrors})
    }

    setTimeout(() => {
      this.setState({isLoading: true, validationErrors: {}})
    }, 200)

    const {
      name,
      company,
      emailAddress,
      phoneNumber,
      subject,
      message
    } = this.state

    try {
      const res = await axios.post('https://virtue-mailer.herokuapp.com/send', {
        emailAddress,
        phoneNumber,
        name,
        company,
        subject,
        message
      })

      if (res.statusText.toLowerCase() !== 'ok') {
        throw new Error(`Invalid response code ${res.status}`)
      }
      console.log({res})
      this.resetForm()

    } catch (err) {
      console.error(err)
    } finally {
      this.setState({isLoading: false})
    }
  }

  render () {
    const {
      name,
      company,
      emailAddress,
      phoneNumber,
      subject,
      message,
      isLoading,
      validationErrors
    } = this.state

    const form = (
      <form
        onSubmit={this.handleSubmit}
        noValidate
        autoComplete="off"
        style={formStyles.form}
      >
        <Input
          name="name"
          label="Name"
          value={name}
          onChange={this.handleChange}
          disabled={isLoading}
          required
          helperText={validationErrors.name || null}
          error={!!validationErrors.name}
        />

        <Input
          label="Email"
          type="email"
          name="emailAddress"
          value={emailAddress}
          autoComplete="email"
          onChange={this.handleChange}
          disabled={isLoading}
          required
          helperText={validationErrors.emailAddress || null}
          error={!!validationErrors.emailAddress}
        />
        <Input
          type="tel"
          label="Phone number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={this.handleChange}
          disabled={isLoading}
        />
        <Input
          name="company"
          label="Company"
          value={company}
          onChange={this.handleChange}
          disabled={isLoading}
        />
        <Input
          label="Subject"
          name="subject"
          value={subject}
          onChange={this.handleChange}
          disabled={isLoading}
        />

        <Input
          type="textarea"
          label="Message"
          name="message"
          value={message}
          onChange={this.handleChange}
          disabled={isLoading}
          required
          helperText={validationErrors.message || null}
          error={!!validationErrors.message}
        />

        <Button
          fullWidth
          type="submit"
          disabled={isLoading}
          style={formStyles.button}
        >
          {isLoading ? <CircularProgress size={30}/> : "Submit"}
        </Button>
      </form>
    )

    return (
      <ExpandingCard
        variant="send"
        title="Send us a message"
        defaultExpanded
      >
        {form}
      </ExpandingCard>
    )
  }
}

export default ContactForm
