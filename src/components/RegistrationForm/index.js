import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstNameLostFocus: false,
    isLastNameLostFocus: false,
    isSubmitClicked: false,
  }

  onSubmitAnotherResponse = () =>
    this.setState({
      firstName: '',
      lastName: '',
      isFirstNameLostFocus: false,
      isLastNameLostFocus: false,
      isSubmitClicked: false,
    })

  onSubmitForm = event => {
    event.preventDefault()
    this.validateUserDetails()
  }

  validateUserDetails = () => {
    const {firstName, lastName} = this.state

    if (firstName === '') {
      this.setState({isFirstNameLostFocus: true})
    }

    if (lastName === '') {
      this.setState({isLastNameLostFocus: true})
    }

    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmitClicked: true})
    }
  }

  onChangeFirstName = event =>
    this.setState({firstName: event.target.value, isFirstNameLostFocus: false})

  onChangeLastName = event =>
    this.setState({lastName: event.target.value, isLastNameLostFocus: false})

  onBlurFirstNameField = () => {
    const {firstName} = this.state

    if (firstName === '') {
      this.setState({isFirstNameLostFocus: true})
    } else {
      this.setState({isFirstNameLostFocus: false})
    }
  }

  onBlurLastNameField = () => {
    const {lastName} = this.state

    if (lastName === '') {
      this.setState({isLastNameLostFocus: true})
    } else {
      this.setState({isLastNameLostFocus: false})
    }
  }

  renderFirstName = () => {
    const {firstName, isFirstNameLostFocus} = this.state

    const lostFocusInputClassName = isFirstNameLostFocus
      ? 'lost-focus-input'
      : ''

    return (
      <>
        <label htmlFor="firstName" className="input-label">
          FIRST NAME
        </label>
        <div>
          <input
            type="text"
            id="firstName"
            className={`${lostFocusInputClassName} input`}
            placeholder="First name"
            onBlur={this.onBlurFirstNameField}
            onChange={this.onChangeFirstName}
            value={firstName}
          />
          {isFirstNameLostFocus && <p className="error-message">Required</p>}
        </div>
      </>
    )
  }

  renderLastName = () => {
    const {lastName, isLastNameLostFocus} = this.state

    const lostFocusInputClassName = isLastNameLostFocus
      ? 'lost-focus-input'
      : ''

    return (
      <>
        <label htmlFor="lastName" className="input-label">
          LAST NAME
        </label>
        <div>
          <input
            type="text"
            id="lastName"
            className={`${lostFocusInputClassName} input`}
            placeholder="Last name"
            onBlur={this.onBlurLastNameField}
            onChange={this.onChangeLastName}
            value={lastName}
          />
          {isLastNameLostFocus && <p className="error-message">Required</p>}
        </div>
      </>
    )
  }

  render() {
    const {isSubmitClicked} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="registration-form-heading">Registration</h1>

          <form
            className="registration-form-details"
            onSubmit={this.onSubmitForm}
          >
            {!isSubmitClicked && (
              <>
                <div>{this.renderFirstName()}</div>
                <div>{this.renderLastName()}</div>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </>
            )}
            {isSubmitClicked && (
              <>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                  alt="success"
                  className="success"
                />
                <p className="success-text">Submitted Successfully</p>
                <button
                  type="button"
                  className="submit-button"
                  onClick={this.onSubmitAnotherResponse}
                >
                  Submit Another Response
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
