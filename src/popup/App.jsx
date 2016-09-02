const React = require('react')
const ReactDOM = require('react-dom')

const Input = require('./Input.jsx')
const KeywordList = require('./KeywordList.jsx')

var App = React.createClass({
  getInitialState: function () {
    return {
      keywords: ['keyword1', 'keyword2', 'keyword3']
    }
  },
  render: function () {
    var styles = {
      padding: '0px',
      margin: '0px',
      width: '350px'
    }
    return (
      <div style={styles} className='container'>
        <Input />
        <KeywordList keywords={this.state.keywords} />
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
