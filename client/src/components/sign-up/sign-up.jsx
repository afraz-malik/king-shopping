import React, { useState, useEffect } from 'react'
import './sign-up.scss'
//Redux
import { connect } from 'react-redux'
import { signUp } from '../../redux/user/user.action'
import { clearError } from '../../redux/user/user.action'

import { createStructuredSelector } from 'reselect'
import { Loading } from '../../redux/user/user.selectors'
import { signInFailed } from '../../redux/user/user.selectors'
///Components
import FormInput from '../form-input/form-input'
import Button from '../button/button'
import { Spinner } from '../spinner/spinner'

const mapStateToProps = createStructuredSelector({
  isLoading: Loading,
  error: signInFailed,
})
const mapDispatchToProps = (dispatch) => ({
  signUp: (userData) => dispatch(signUp(userData)),
  clearError: () => dispatch(clearError()),
})
const SignUp = ({ signUp, isLoading, error, clearError }) => {
  useEffect(() => {
    return error ? alert(error) : null
  }, [error])
  if (error) clearError()
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { displayName, email, password, confirmPassword } = userCredentials
  const handleChange = (event) => {
    setUserCredentials({
      ...userCredentials,
      [event.target.name]: event.target.value,
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('Password not Matched')
      return
    }
    signUp({ email, password, displayName })
    setUserCredentials({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label=" Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <Button type="submit">SIGN UP</Button>
      </form>
      {isLoading ? <Spinner /> : null}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
