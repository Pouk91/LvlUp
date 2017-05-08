'use strict'

const store = require('../store.js')
// const showWorkouts = require('../templates/workouts.handlebars');

const signUpSuccess = (data) => {
  console.log('Success')
}

// On signup failure message appears for 2 seconds
const signUpFailure = (data) => {
  console.log('Fail')
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log('Success')
}

const signInFailure = (data) => {
  console.log('Fail')
}

const changePasswordSuccess = (data) => {
  console.log('Success')
}

const changePasswordFailure = (data) => {
  console.log('Fail')
}

const signOutSuccess = (data) => {
  console.log('Success')
}

const signOutFailure = (data) => {
  console.log('Fail')
}

const workOutSuccess = (data) => {
  console.log('Success')
}

const workOutFailure = (data) => {
  console.log('Fail')
}

const getWorkOutsSuccess = (data) => {
  console.log(data)
}

const getWorkOutsFailure = (data) => {
  console.log('Fail')
}

// const updateWorkOutSuccess = (data) => {
//   console.log('Success')
// }

// const updateWorkOutFailure = (data) => {
//   console.log('Fail')
// }

// const deleteWorkOutSuccess = (data) => {
//   console.log('Success')
// }

// const deleteWorkOutFailure = (data) => {
//   console.log('Fail')
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  workOutSuccess,
  workOutFailure,
  getWorkOutsSuccess,
  getWorkOutsFailure
  // updateWorkOutSuccess,
  // updateWorkOutFailure,
  // deleteWorkOutSuccess,
  // deleteWorkOutFailure
}
