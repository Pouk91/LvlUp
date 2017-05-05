// 'use strict'
//
// const updateGame = require('./api.js').updateGame
// // const events = require('./events.js')
//
// let totalClicks = 0
//
// const isNoWinner = function () {
//   totalClicks++
//   console.log(totalClicks)
//   if (totalClicks === 9 && !isWinnerX() && !isWinnerO()) {
//     $('#messageBanner').text('Tie.')
//     // console.log('Tie')
//     $('#gameBoard').addClass('avoid-clicks')
//     totalClicks = 0
//     return true
//   }
// }
//
// // isWinnerX checks gameBoard cells for X win combiantions and dispays Player 1 win
// const isWinnerX = function () {
//   if (($('#c1').text() === 'X') && ($('#c2').text() === 'X') && ($('#c3').text() === 'X')) {
//     $('#messageBanner').text('Player 1 Wins!')
//     $('#gameBoard').addClass('avoid-clicks')
//     totalClicks = 0
//     return true
//   }
//
//   if (($('#c4').text() === 'X') && ($('#c5').text() === 'X') && ($('#c6').text() === 'X')) {
//     $('#messageBanner').text('Player 1 Wins!')
//     $('#gameBoard').addClass('avoid-clicks')
//     totalClicks = 0
//     return true
//   }
//
//   if (($('#c7').text() === 'X') && ($('#c8').text() === 'X') && ($('#c9').text() === 'X')) {
//     $('#messageBanner').text('Player 1 Wins!')
//     $('#gameBoard').addClass('avoid-clicks')
//     totalClicks = 0
//     return true
//   }
//
//   if (($('#c1').text() === 'X') && ($('#c4').text() === 'X') && ($('#c7').text() === 'X')) {
//     $('#messageBanner').text('Player 1 Wins!')
//     $('#gameBoard').addClass('avoid-clicks')
//     totalClicks = 0
//     return true
//   }
//
//   if (($('#c2').text() === 'X') && ($('#c5').text() === 'X') && ($('#c8').text() === 'X')) {
//     $('#messageBanner').text('Player 1 Wins!')
//     $('#gameBoard').addClass('avoid-clicks')
//     totalClicks = 0
//     return true
//   }
//
//   if (($('#c3').text() === 'X') && ($('#c6').text() === 'X') && ($('#c9').text() === 'X')) {
//     $('#messageBanner').text('Player 1 Wins!')
//     $('#gameBoard').addClass('avoid-clicks')
//     totalClicks = 0
//     return true
//   }
//
//   if (($('#c1').text() === 'X') && ($('#c5').text() === 'X') && ($('#c9').text() === 'X')) {
//     $('#messageBanner').text('Player 1 Wins!')
//     $('#gameBoard').addClass('avoid-clicks')
//     totalClicks = 0
//     return true
//   }
//
//   if (($('#c3').text() === 'X') && ($('#c5').text() === 'X') && ($('#c7').text() === 'X')) {
//     $('#messageBanner').text('Player 1 Wins!')
//     $('#gameBoard').addClass('avoid-clicks')
//     totalClicks = 0
//     return true
//   }
//
//   // totalClicks++
//   // console.log(totalClicks)
//   // isNoWinner()
// }
//
// // isWinnerO checks gameBoard cells for y win combiantions and displays Player 2 Wins!
// const isWinnerO = function () {
//   if (($('#c1').text() === 'O') && ($('#c2').text() === 'O') && ($('#c3').text() === 'O')) {
//     $('#messageBanner').text('Player 2 Wins!')
//     $('#gameBoard').addClass('avoid-clicks')
//     totalClicks = 0
//     return true
//   }
//
//   if (($('#c4').text() === 'O') && ($('#c5').text() === 'O') && ($('#c6').text() === 'O')) {
//     $('#messageBanner').text('Player 2 Wins!')
//     $('#gameBoard').addClass('avoid-clicks')
//     totalClicks = 0
//     return true
//   }
//
//   if (($('#c7').text() === 'O') && ($('#c8').text() === 'O') && ($('#c9').text() === 'O')) {
//     $('#messageBanner').text('Player 2 Wins!')
//     $('#gameBoard').addClass('avoid-clicks')
//     totalClicks = 0
//     return true
//   }
//
//   if (($('#c1').text() === 'O') && ($('#c4').text() === 'O') && ($('#c7').text() === 'O')) {
//     $('#messageBanner').text('Player 2 Wins!')
//     $('#gameBoard').addClass('avoid-clicks')
//     totalClicks = 0
//     return true
//   }
//
//   if (($('#c2').text() === 'O') && ($('#c5').text() === 'O') && ($('#c8').text() === 'O')) {
//     $('#messageBanner').text('Player 2 Wins!')
//     $('#gameBoard').addClass('avoid-clicks')
//     totalClicks = 0
//     return true
//   }
//
//   if (($('#c3').text() === 'O') && ($('#c6').text() === 'O') && ($('#c9').text() === 'O')) {
//     $('#messageBanner').text('Player 2 Wins!')
//     $('#gameBoard').addClass('avoid-clicks')
//     totalClicks = 0
//     return true
//   }
//
//   if (($('#c1').text() === 'O') && ($('#c5').text() === 'O') && ($('#c9').text() === 'O')) {
//     $('#messageBanner').text('Player 2 Wins!')
//     $('#gameBoard').addClass('avoid-clicks')
//     totalClicks = 0
//     return true
//   }
//
//   if (($('#c3').text() === 'O') && ($('#c5').text() === 'O') && ($('#c7').text() === 'O')) {
//     $('#messageBanner').text('Player 2 Wins!')
//     $('#gameBoard').addClass('avoid-clicks')
//     totalClicks = 0
//     return true
//   }
//
//   // totalClicks++
//   // console.log(totalClicks)
//   // isNoWinner()
// }
//
// module.exports = {
//   isWinnerX,
//   isWinnerO,
//   isNoWinner,
//   totalClicks
// }
