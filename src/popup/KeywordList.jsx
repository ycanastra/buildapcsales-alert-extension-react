const React = require('react')

var KeywordList = React.createClass({
  propTypes: {
    keywords: React.PropTypes.array.isRequired,
    removeKeyword: React.PropTypes.func.isRequired
  },
  styles: {
    position: 'relative',
    marginTop: '45px',
    overflow: 'auto',
    maxHeight: 'calc(600px - 45px)'
  },
  render: function () {
    return (
      <div style={this.styles}>
        {this.props.keywords.map(keyword =>
          <KeywordListItem removeKeyword={this.props.removeKeyword} keyword={keyword} />
        )}
      </div>
    )
  }
})

var KeywordListItem = React.createClass({
  propTypes: {
    keyword: React.PropTypes.string.isRequired,
    removeKeyword: React.PropTypes.func.isRequired
  },
  styles: {
    display: 'block',
    fontSize: '20px',
    width: '100%',
    height: '35px',
    fontWeight: 'normal',
    margin: '0px',
    borderRadius: '3px'
  },
  getInitialState: function () {
    return {
      hover: false
    }
  },
  mouseOver: function () {
    this.setState({
      hover: true
    })
  },
  mouseOut: function () {
    this.setState({
      hover: false
    })
  },
  removeKeyword: function (event) {
    console.log(event.target.innerHTML)
    this.props.removeKeyword(event.target.innerHTML)
  },
  render: function () {
    this.styles.backgroundColor = (this.state.hover) ? 'gray' : 'white'
    return (
      <label
        style={this.styles}
        onClick={this.removeKeyword}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}>
        {this.props.keyword}
      </label>
    )
  }
})

module.exports = KeywordList
