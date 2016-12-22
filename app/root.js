const inherits = require('util').inherits
const Component = require('react').Component
const h = require('react-hyperscript')
const App = require('./app')
// this is where you export 'the component' for future use
module.exports = Root

inherits(Root, Component)
function Root () { Component.call(this) }

// this is the render function
Root.prototype.render = function () {
  // these are the things you want to render
  var message
  try {
    web3
  } catch (e) {
    message = 'No Web3 Please go download MetaMask or Mist'
  }
  return (
    h('.main-container', {
      style: {
      }
    }, message || h(App, {
      address: web3.eth.accounts[0],
      }
    ))
  )
}
