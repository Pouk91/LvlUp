'use strict'

const config = require('../config.js')
const store = require('../store.js')

const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const newGame = () => {
//   return $.ajax({
//     url: config.apiOrigin + '/games',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }
//
// const updateGame = (data) => {
//   return $.ajax({
//     url: config.apiOrigin + '/games/' + store.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
//   "games": [
//     {
//       "id": 1,
//       "cells": ["o","x","o","x","o","x","o","x","o"],
//       "over": true,
//       "player_x": {
//         "id": 1,
//         "email": "and@and.com"
//       },
//       "player_o": {
//         "id": 3,
//         "email": "dna@dna.com"
//       }
//     },
//     {
//       "id": 2,
//       "cells": ["","","","","","","","",""],
//       "over": false,
//       "player_x": {
//         "id": 3,
//         "email": "dna@dna.com"
//       },
//       "player_o": {
//         "id": 1,
//         "email": "and@and.com"
//       }
//     }
//   ]
// }
// })
//
// const updateMoves = (getIndex, getValue) => {
//   return $.ajax({
//     url: config.apiOrigin + '/games/' + store.game.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: {
//       'game': {
//         'cell': {
//           'index': getIndex,
//           'value': getValue
//         },
//         // 'over': false
//       }
//     }
//   })
// }
//
// const getGames = () => {
//   return $.ajax({
//     url: config.apiOrigin + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     }
//   })
// }

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
  // newGame,
  // updateGame,
  // updateMoves,
  // getGames
}
