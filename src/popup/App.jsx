const React = require('react')
const ReactDOM = require('react-dom')

const Input = require('./Input.jsx')

var App = React.createClass({
  render: function () {
    var styles = {
      padding: '0px',
      margin: '0px',
      width: '350px'
    }
    return (
      <div style={styles} className='container'>
        <Input />
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
