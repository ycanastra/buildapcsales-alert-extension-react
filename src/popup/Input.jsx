const React = require('react')

const FormControl = require('react-bootstrap').FormControl

var Input = React.createClass({
  propTypes: {
    addKeyword: React.PropTypes.func.isRequired
  },
  styles: {
    position: 'absolute',
    top: '0px',
    width: '100%',
    margin: '0px',
    padding: '10px',
    height: '45px',
    color: 'black',
    fontSize: '20px'
  },
  getInitialState: function () {
    return {
      inputValue: ''
    }
  },
  handleKeyPress: function (event) {
    if (event.key === 'Enter') {
      this.props.addKeyword(event.target.value)
      event.target.value = ''
    }
  },
  render: function () {
    return (
      <FormControl
        style={this.styles}
        onKeyPress={this.handleKeyPress}
        placeholder='Add a keyword' />
    )
  }
})

module.exports = Input
