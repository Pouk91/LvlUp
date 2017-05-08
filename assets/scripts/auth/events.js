'use strict'
// const store = require('../store.js')
const getFormFields = require(`../../../lib/get-form-fields`)

// const lvlUpLogic = require('./lvlUp')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  // console.log(data, 'hi')
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onWorkout = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.userWorkOut(data)
    .then(ui.setsSuccess)
    .catch(ui.setsFailure)
}

// event handlers
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#workout').on('submit', onWorkout)
}

module.exports = {
  addHandlers
}
