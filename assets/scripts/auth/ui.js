'use strict'

const store = require('../store.js')
const showWorkOutsTemplate = require('../templates/workouts.handlebars')

const resetFormField = function () {
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  document.getElementById('change-password').reset()
  document.getElementById('sign-out').reset()
  document.getElementById('enter-workout').reset()
  document.getElementById('update-workout').reset()
  document.getElementById('delete-workout').reset()
  document.getElementById('get-workouts').reset()
}

const signUpSuccess = (data) => {
  // console.log('Success')
  $('#messageBanner').text('Sign up successful!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
}

// On signup failure message appears for 2 seconds
const signUpFailure = (data) => {
  // console.log('Fail')
  $('#messageBanner').text('Wrong credentials try again.')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
}

const signInSuccess = (data) => {
  store.user = data.user
  // console.log('Success')
  $('#messageBanner').text('Sign in successful!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  $('#sign-up').addClass('hide-elements')
  $('#sign-in').addClass('hide-elements')
  $('#change-password').removeClass('hide-elements')
  $('#sign-out').removeClass('hide-elements')
  $('#enter-workout').removeClass('hide-elements')
  $('#workouts').removeClass('hide-elements')
  resetFormField()
}

const signInFailure = (data) => {
  $('#messageBanner').text('Wrong credentials try again!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
  // console.log('Fail')
}

const changePasswordSuccess = (data) => {
  $('#messageBanner').text('Change Password Succesful!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
  // console.log('Success')
}

const changePasswordFailure = (data) => {
  $('#messageBanner').text('Wrong credentials try again!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
  // console.log('Fail')
}

const signOutSuccess = (data) => {
  $('#messageBanner').text('See You Next Time!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  $('#sign-up').removeClass('hide-elements')
  $('#sign-in').removeClass('hide-elements')
  $('#change-password').addClass('hide-elements')
  $('#sign-out').addClass('hide-elements')
  $('#enter-workout').addClass('hide-elements')
  $('#update-workout').addClass('hide-elements')
  $('#delete-workout').addClass('hide-elements')
  $('#workouts').addClass('hide-elements')
  $('#get-workouts').addClass('hide-elements')
  $('.content').addClass('hide-elements')
  resetFormField()
  // console.log('Success')
}

const signOutFailure = (data) => {
  resetFormField()
  // console.log('Fail')
}

const enterWorkOutSuccess = (data) => {
  // console.log('succes')
  $('#messageBanner').text('Workout Created!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  $('.content').addClass('hide-elements')
  $('#update-workout').removeClass('hide-elements')
  $('#delete-workout').removeClass('hide-elements')
  $('#get-workouts').removeClass('hide-elements')
  resetFormField()
  // store.workout = data.workout
  // console.log(data, 'enterWorkOuts')
}

const enterWorkOutFailure = (data) => {
  resetFormField()
  // console.log(data)
}

const getWorkOutsSuccess = (data) => {
  $('#messageBanner').text('Here are your workouts')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  $('.content').empty()
  const showWorkOutsHtml = showWorkOutsTemplate({ workouts: data.workouts })
  $('.content').append(showWorkOutsHtml)
  $('.content').removeClass('hide-elements')
  resetFormField()
  // console.log(data)
}

const getWorkOutsFailure = (data) => {
  $('#messageBanner').text('No workouts saved, enter some to start!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
}

const updateWorkOutSuccess = (data) => {
  $('#messageBanner').text('Workout Updated!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  $('.content').addClass('hide-elements')
  resetFormField()
  // console.log('Success')
}

const updateWorkOutFailure = (data) => {
  $('#messageBanner').text('Sorry ID not found. Click get workouts for one!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
  // console.log('Fail')
}

const deleteWorkOutSuccess = (data) => {
  $('#messageBanner').text('Workout Deleted!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  $('.content').addClass('hide-elements')
  resetFormField()
  // console.log('Success')
}

const deleteWorkOutFailure = (data) => {
  $('#messageBanner').text('Sorry ID not found. Click get workouts for one!')
  setTimeout(function () { $('#messageBanner').text('') }, 4000)
  resetFormField()
  // console.log('Failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  enterWorkOutSuccess,
  enterWorkOutFailure,
  getWorkOutsSuccess,
  getWorkOutsFailure,
  updateWorkOutSuccess,
  updateWorkOutFailure,
  deleteWorkOutSuccess,
  deleteWorkOutFailure
}
