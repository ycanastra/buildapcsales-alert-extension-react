const React = require('react')

var Footer = React.createClass({
  styles: {
    div: {
      position: 'relative',
      height: '20px',
      backgroundColor: 'white',
      textAlign: 'center',
      margin: '0px',
      padding: '0px',
      bottom: '0px',
      width: '100%',
      overflow: 'hidden'
    },
    a: {
      color: 'black',
      cursor: 'pointer'
    },
    hr: {
      margin: '0px'
    }
  },
  render: function () {
    return (
      <div style={this.styles.div}>
        <hr style={this.styles.hr} />
        <a style={this.styles.a}>Options</a>
      </div>
    )
  }
})

module.exports = Footer
