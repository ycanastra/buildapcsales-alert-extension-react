const React = require('react')
const ReactDOM = require('react-dom')

const Input = require('./Input.jsx')
const KeywordList = require('./KeywordList.jsx')

var App = React.createClass({
  getInitialState: function () {
    return {
      keywords: ['keyword1', 'keyword2', 'keyword3', 'keyword4', 'keyword5',
                 'keyword6', 'keyword7', 'keyword8', 'keyword10', 'keyword11']
    }
  },
  addKeyword: function (keyword) {
    var keywords = this.state.keywords
    if (!keywords.includes(keyword)) {
      keywords.unshift(keyword)
      this.setState({
        keywords: keywords
      })
    }
  },
  removeKeyword: function (keyword) {
    var keywords = this.state.keywords
    if (keywords.includes(keyword)) {
      var index = keywords.indexOf(keyword)
      keywords.splice(index, 1)
      this.setState({
        keywords: keywords
      })
    }
  },
  styles: {
    padding: '0px',
    margin: '0px',
    width: '350px',
    maxHeight: '600px'
  },
  render: function () {
    return (
      <div style={this.styles} className='container'>
        <Input addKeyword={this.addKeyword} />
        <KeywordList keywords={this.state.keywords} removeKeyword={this.removeKeyword} />
      </div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
