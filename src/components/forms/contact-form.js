import React, { PureComponent } from 'react'
import toast from 'just-toasty'
import axios from 'axios'

import formStyles from './styles'

import {
  validateField,
  validateForm
} from '@utils/validation'

import {
  Button,
  CircularProgress,
} from '@material-ui/core'

import Input from '@components/inputs'
import Card from '@components/cards'

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
    isLoading: false,
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

  displayToast = (message, type) => {
    const config = {
      styles: {...formStyles.snackbar(type)},
      duration: 6000
    }
    toast(message, config)
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
      this.displayToast('Oops! Please complete all required fields.')
      return this.setState({validationErrors, previousErrors})
    } else {
      this.setState({isLoading: true, validationErrors: {}})
    }

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

      this.resetForm()
      this.displayToast('Message sent successfully.', 'success')
    } catch (err) {
      console.error(err)
      this.displayToast('Oops! Sending failed. Please try again or email us directly.', 'error')
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
      <Card
        variant="send"
        title="Send us a message"
      >
        {form}
      </Card>
    )
  }
}

export default ContactForm
