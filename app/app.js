const inherits = require('util').inherits
const Component = require('react').Component
const h = require('react-hyperscript')
const UserPanel = require('./components/user-panel')

module.exports = App

inherits(App, Component)
function App () { Component.call(this) }

App.prototype.render = function (state, props) {
 debugger
  var props = this.props
  const address = props.address
  return (
    h('.app', {
      style: {
      }
    }, [
      h('h1.hello-world', 'Hello WORLD!'),
    //   h(UserPanel, {
    //     address: address,
    //   }),
    ])
  )
}
