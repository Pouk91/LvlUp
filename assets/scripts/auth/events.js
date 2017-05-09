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

const onEnterWorkOut = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.enterWorkOut(data)
    .then(ui.workOutEnterSuccess)
    .catch(ui.workOutEnterFailure)
}

const onGetWorkOuts = function (event) {
  event.preventDefault()
  // const data = getFormFields(this)
  api.getWorkOuts()
    .then(ui.getWorkOutsSuccess)
    .catch(ui.getWorkOutsFailure)
}

// const onUpdateWorkOut = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.updateWorkOut(data)
//   .then(ui.updateWorkOutSuccess)
//   .catch(ui.updateWorkOutFailure)
// }

// const onDeleteWorkOut = function (event) {
//   event.preventDefault()
//   const data = getFormFields(this)
//   api.deleteWorkOut(data)
//     .then(ui.deleteWorkOutSuccess)
//     .catch(ui.deleteWorkOutFailure)
// }

// event handlers
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
  $('#enter-workout').on('submit', onEnterWorkOut)
  $('#get-workouts').on('click', onGetWorkOuts)
  // $('#update-workout').on('click', onUpdateWorkOut)
  // $('#delete-workout').on('click', onDeleteWorkOut)
  // $('#change-password').addClass('hide-elements')
  // $('#sign-out').addClass('hide-elements')
  // $('#new-game').addClass('hide-elements')
  // $('#update-workout').addClass('hide-elements')
  // $('#delete-workout').addClass('hide-elements')
  // $('#workouts').addClass('hide-elements')
  // $('#get-workouts').addClass('hide-elements')
}

module.exports = {
  addHandlers
}
