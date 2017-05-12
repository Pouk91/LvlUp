'use strict'

const store = require('../store.js')
const showWorkOutsTemplate = require('../templates/workouts.handlebars')

const signUpSuccess = (data) => {
  // console.log('Success')
  $('#messageBanner').text('Sign up successful!')
  setTimeout(function () { $('#messageBanner').text('') }, 2000)
}

// On signup failure message appears for 2 seconds
const signUpFailure = (data) => {
  // console.log('Fail')
  $('#messageBanner').text('Wrong credentials try again.')
  setTimeout(function () { $('#messageBanner').text('') }, 2000)
}

const signInSuccess = (data) => {
  store.user = data.user
  // console.log('Success')
  $('#messageBanner').text('Sign in successful!')
  setTimeout(function () { $('#messageBanner').text('') }, 2000)
  $('#sign-up').addClass('hide-elements')
  $('#sign-in').addClass('hide-elements')
  $('#change-password').removeClass('hide-elements')
  $('#sign-out').removeClass('hide-elements')
  $('#enter-workout').removeClass('hide-elements')
  $('#update-workout').removeClass('hide-elements')
  $('#delete-workout').removeClass('hide-elements')
  $('#workouts').removeClass('hide-elements')
  $('#get-workouts').removeClass('hide-elements')
}

const signInFailure = (data) => {
  $('#messageBanner').text('Wrong credentials try again!')
  setTimeout(function () { $('#messageBanner').text('') }, 2000)
  // console.log('Fail')
}

const changePasswordSuccess = (data) => {
  $('#messageBanner').text('Change Password Succesful!')
  setTimeout(function () { $('#messageBanner').text('') }, 2000)
  // console.log('Success')
}

const changePasswordFailure = (data) => {
  $('#messageBanner').text('Wrong credentials try again!')
  setTimeout(function () { $('#messageBanner').text('') }, 2000)
  // console.log('Fail')
}

const signOutSuccess = (data) => {
  $('#messageBanner').text('See You Next Time!')
  setTimeout(function () { $('#messageBanner').text('') }, 2000)
  $('#sign-up').removeClass('hide-elements')
  $('#sign-in').removeClass('hide-elements')
  $('#change-password').addClass('hide-elements')
  $('#sign-out').addClass('hide-elements')
  $('#enter-workout').addClass('hide-elements')
  $('#update-workout').addClass('hide-elements')
  $('#delete-workout').addClass('hide-elements')
  $('#workouts').addClass('hide-elements')
  $('#get-workouts').addClass('hide-elements')
  // console.log('Success')
  $('.content').addClass('hide-elements')
  // console.log('Success')
}

const signOutFailure = (data) => {
  // console.log('Fail')
}

const enterWorkOutSuccess = (data) => {
  $('.content').addClass('hide-elements')
  // store.workout = data.workout
  // console.log(data, 'enterWorkOuts')
}

const enterWorkOutFailure = (data) => {
  // console.log(data)
}

const getWorkOutsSuccess = (data) => {
  // console.log(data)
  $('#messageBanner').text('Workout Deleted!')
  setTimeout(function () { $('#messageBanner').text('') }, 2000)
  $('.content').empty()
  const showWorkOutsHtml = showWorkOutsTemplate({ workouts: data.workouts })
  $('.content').append(showWorkOutsHtml)
  $('.content').removeClass('hide-elements')
  // $('.removeLastButton').on('click', removeItem)
}

const getWorkOutsFailure = (data) => {
  // console.log(data)
}

const updateWorkOutSuccess = (data) => {
  $('#messageBanner').text('Workout Updated!')
  setTimeout(function () { $('#messageBanner').text('') }, 2000)
  $('.content').addClass('hide-elements')
  // console.log('Success')
}

const updateWorkOutFailure = (data) => {
  // console.log('Fail')
}

const deleteWorkOutSuccess = (data) => {
  // console.log('Success')
  $('#messageBanner').text('Workout Deleted!')
  setTimeout(function () { $('#messageBanner').text('') }, 2000)
  $('.content').addClass('hide-elements')
  console.log('Success')
}

const deleteWorkOutFailure = (data) => {
  // console.log('Fail')
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
