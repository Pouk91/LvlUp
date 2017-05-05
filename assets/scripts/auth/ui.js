'use strict'

const store = require('../store.js')

// On signup success text will appear for 2 seconds and signup input dissappear
// Removes class hide-elements for for ids sign-up, sign-in, change-password, gameBoard,
// game-record, game-records
const signUpSuccess = (data) => {
  console.log('Success')
  // $('#messageBanner').text('Sign up successful!')
  // setTimeout(function () { $('#messageBanner').text('') }, 2000)
  // $('#sign-up').addClass('hide-elements')
  // $('#sign-in').removeClass('hide-elements')
  // $('#change-password').removeClass('hide-elements')
  // $('#new-game').removeClass('hide-elements')
}

// On signup failure message appears for 2 seconds
const signUpFailure = (data) => {
  console.log('fail')
  // $('#messageBanner').text('Wrong credentials try again.')
  // setTimeout(function () { $('#messageBanner').text('') }, 2000)
}

const signInSuccess = (data) => {
  store.user = data.user
  console.log('Success')
  // console.log(store.user, 'store.user')
  // $('#messageBanner').text('Sign in successful!')
  // setTimeout(function () { $('#messageBanner').text('') }, 2000)
  // $('#sign-up').addClass('hide-elements')
  // $('#sign-in').addClass('hide-elements')
  // $('#sign-out').removeClass('hide-elements')
  // $('#new-game').removeClass('hide-elements')
  // $('#game-record').removeClass('hide-elements')
  // $('#game-records').removeClass('hide-elements')
  // $('#get-games').removeClass('hide-elements')
  // $('#change-password').removeClass('hide-elements')
  // $('#newGameButton').click()
}

const signInFailure = (data) => {
  console.log('fail')
  // $('#messageBanner').text('Wrong credentials try again!')
  // setTimeout(function () { $('#messageBanner').text('') }, 2000)
  // console.log(data)
}

const changePasswordSuccess = (data) => {
  // $('#messageBanner').text('Change password successful!')
  // setTimeout(function () { $('#messageBanner').text('') }, 2000)
  // console.log(data)
}

const changePasswordFailure = (data) => {
  // $('#messageBanner').text('Wrong credentials try again!')
  // setTimeout(function () { $('#messageBanner').text('') }, 2000)
  // console.log(data)
}

const signOutSuccess = (data) => {
  // $('#messageBanner').text('Thanks for playing!')
  // setTimeout(function () { $('#messageBanner').text('') }, 2000)
  // $('#c1').text('')
  // $('#c1').removeClass('avoid-clicks')
  // $('#c2').text('')
  // $('#c2').removeClass('avoid-clicks')
  // $('#c3').text('')
  // $('#c3').removeClass('avoid-clicks')
  // $('#c4').text('')
  // $('#c4').removeClass('avoid-clicks')
  // $('#c5').text('')
  // $('#c5').removeClass('avoid-clicks')
  // $('#c6').text('')
  // $('#c6').removeClass('avoid-clicks')
  // $('#c7').text('')
  // $('#c7').removeClass('avoid-clicks')
  // $('#c8').text('')
  // $('#c8').removeClass('avoid-clicks')
  // $('#c9').text('')
  // $('#c9').removeClass('avoid-clicks')
  // $('#gameBoard').removeClass('avoid-clicks')
  // $('#sign-up').removeClass('hide-elements')
  // $('#gameBoard').addClass('hide-elements')
  // $('#sign-in').removeClass('hide-elements')
  // $('#sign-out').addClass('hide-elements')
  // $('#new-game').addClass('hide-elements')
  // $('#get-games').addClass('hide-elements')
}

const signOutFailure = (data) => {
  // console.eror(data)
}

// const newGameSuccess = (data) => {
//   // console.log(store, 'this is new game data')
//   store.game = data.game
//   $('#messageBanner').text('')
//   $('#c1').text('')
//   $('#c1').removeClass('avoid-clicks')
//   $('#c2').text('')
//   $('#c2').removeClass('avoid-clicks')
//   $('#c3').text('')
//   $('#c3').removeClass('avoid-clicks')
//   $('#c4').text('')
//   $('#c4').removeClass('avoid-clicks')
//   $('#c5').text('')
//   $('#c5').removeClass('avoid-clicks')
//   $('#c6').text('')
//   $('#c6').removeClass('avoid-clicks')
//   $('#c7').text('')
//   $('#c7').removeClass('avoid-clicks')
//   $('#c8').text('')
//   $('#c8').removeClass('avoid-clicks')
//   $('#c9').text('')
//   $('#c9').removeClass('avoid-clicks')
//   $('#gameBoard').removeClass('hide-elements')
//   $('#gameBoard').removeClass('avoid-clicks')
//   $('#totalGamesBanner').addClass('hide-elements')
// }
//
// const newGameFailure = (data) => {
//   // console.log(data)
// }
//
// const updateGameSuccess = (data) => {
//   // console.log(data, 'hi')
// }
//
// const updateGameFailure = (data) => {
//   // console.error(data, 'hi')
// }
//
// const updateMovesSuccess = (data) => {
//   console.log(data)
// }
//
// const updateMovesFailure = (data) => {
//   console.log(data)
// }
//
// const getGamesSuccess = (data) => {
//   // console.log(count)
//   $('#game-count').text(data.games.length)
//   // setTimeout(function () { $('#totalGamesBanner').text('') }, 2000)
//   $('#totalGamesBanner').removeClass('hide-elements')
// }
//
// const getGamesFailure = (data) => {
//   // console.error(data)
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
//   newGameSuccess,
//   newGameFailure,
//   updateGameSuccess,
//   updateGameFailure,
//   updateMovesSuccess,
//   updateMovesFailure,
//   getGamesSuccess,
//   getGamesFailure
}
