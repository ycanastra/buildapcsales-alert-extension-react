const React = require('react')

const FormControl = require('react-bootstrap').FormControl
const FormGroup = require('react-bootstrap').FormGroup

var Input = React.createClass({
  propTypes: {
    addKeyword: React.PropTypes.func.isRequired
  },
  styles: {
    div: {
      position: 'fixed',
      top: '0px',
      width: '100%',
      margin: '0px',
      padding: '0px'
    },
    alert: {
      height: '40px'
    },
    formGroup: {
      height: '45px',
      margin: '0px'
    },
    formControl: {
      top: '0px',
      width: '100%',
      margin: '0px',
      padding: '10px',
      height: '45px',
      color: 'black',
      fontSize: '20px'
    }
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
      <div style={this.styles.div}>
        <FormGroup style={this.styles.formGroup} bsSize='large'>
          <FormControl
            style={this.styles.formControl}
            type='text'
            onKeyPress={this.handleKeyPress}
            placeholder='Add a keyword' />
        </FormGroup>
      </div>
    )
  }
})

module.exports = Input
