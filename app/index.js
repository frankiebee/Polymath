const render = require('react-dom').render
const h = require('react-hyperscript')
const Root = require('./root')

// module.exports = startApp

startApp()

// this is the very beginning
function startApp () {
  // start app
  const container = document.querySelector('#app-content')
  render(
    h(Root),
  container)
}
