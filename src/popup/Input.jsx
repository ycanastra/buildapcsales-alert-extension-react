const React = require('react')

const FormControl = require('react-bootstrap').FormControl
const FormGroup = require('react-bootstrap').FormGroup
const Alert = require('react-bootstrap').Alert

var Input = React.createClass({
  propTypes: {
    addKeyword: React.PropTypes.func.isRequired
  },
  styles: {
    div: {
      position: 'relative',
      top: '0px',
      width: '100%',
      margin: '0px',
      padding: '0px',
      overflow: 'hidden',
      lineHeight: '0'
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
      fontSize: '20px',
      fontStyle: 'normal'
    },
    alert: {
      margin: '0px',
      padding: '10px'
    }
  },
  getInitialState: function () {
    return {
      inputValue: ''
    }
  },
  handleChange: function (event) {
    this.setState({
      inputValue: event.target.value
    })
  },
  handleKeyPress: function (event) {
    if (event.key === 'Enter') {
      this.props.addKeyword(event.target.value)
      event.target.value = ''
      this.setState({
        inputValue: event.target.value
      })
    }
  },
  render: function () {
    this.styles.formControl.fontStyle = (this.state.inputValue.length > 0) ? 'normal' : 'italic'
    return (
      <div style={this.styles.div}>
        <FormGroup style={this.styles.formGroup}>
          <FormControl
            style={this.styles.formControl}
            type='text'
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            placeholder='Add a keyword' />
        </FormGroup>
        <Alert style={this.styles.alert}>
          asdasdas
        </Alert>
      </div>
    )
  }
})

module.exports = Input
