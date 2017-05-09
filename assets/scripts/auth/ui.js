'use strict'

const store = require('../store.js')
const showWorkOutsTemplate = require('../templates/workouts.handlebars')

const signUpSuccess = (data) => {
  // console.log('Success')
}

// On signup failure message appears for 2 seconds
const signUpFailure = (data) => {
  // console.log('Fail')
}

const signInSuccess = (data) => {
  store.user = data.user
  // console.log('Success')
  $('#sign-up').addClass('hide-elements')
  $('#sign-in').addClass('hide-elements')
  $('#change-password').addClass('hide-elements')
  $('#sign-out').removeClass('hide-elements')
  $('#enter-workout').removeClass('hide-elements')
  $('#update-workout').removeClass('hide-elements')
  $('#delete-workout').removeClass('hide-elements')
  $('#workouts').removeClass('hide-elements')
  $('#get-workouts').removeClass('hide-elements')
}

const signInFailure = (data) => {
  // console.log('Fail')
}

const changePasswordSuccess = (data) => {
  // console.log('Success')
}

const changePasswordFailure = (data) => {
  // console.log('Fail')
}

const signOutSuccess = (data) => {
  $('#sign-up').removeClass('hide-elements')
  $('#sign-in').removeClass('hide-elements')
  $('#change-password').removeClass('hide-elements')
  $('#sign-out').addClass('hide-elements')
  $('#enter-workout').addClass('hide-elements')
  $('#update-workout').addClass('hide-elements')
  $('#delete-workout').addClass('hide-elements')
  $('#workouts').addClass('hide-elements')
  $('#get-workouts').addClass('hide-elements')
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
  // $('#get-workouts').click()
}

const enterWorkOutFailure = (data) => {
  // console.log(data)
}

const getWorkOutsSuccess = (data) => {
  // $('.content').empty()
  console.log('Success')
  const showWorkOutsHtml = showWorkOutsTemplate({ workouts: data.workouts })
  $('.content').append(showWorkOutsHtml)
  $('.content').removeClass('hide-elements')
  // $('.removeLastButton').on('click', removeItem)
}

const getWorkOutsFailure = (data) => {
  // console.log(data)
}

const updateWorkOutSuccess = (data) => {
  $('.content').addClass('hide-elements')
  // console.log('Success')
}

const updateWorkOutFailure = (data) => {
  // console.log('Fail')
}

const deleteWorkOutSuccess = (data) => {
  $('.content').addClass('hide-elements')
  // console.log('Success')
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
