const React = require('react')

const Glyphicon = require('react-bootstrap').Glyphicon

var KeywordList = React.createClass({
  propTypes: {
    keywords: React.PropTypes.array.isRequired,
    removeKeyword: React.PropTypes.func.isRequired
  },
  styles: {
    position: 'relative',
    marginTop: '45px',
    marginBottom: '20px',
    overflow: 'auto',
    maxHeight: 'calc(600px - 45px - 20px)'
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
    div: {
      borderRadius: '3px'
    },
    label: {
      display: 'table-cell',
      verticalAlign: 'middle',
      fontSize: '20px',
      width: '100%',
      height: '45px',
      fontWeight: 'normal',
      margin: '0px',
      padding: '10px'
    },
    glyphiconWrapper: {
      display: 'table-cell',
      verticalAlign: 'middle'
    },
    glyphicon: {
      marginRight: '10px',
      cursor: 'pointer'
    }
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
    this.styles.div.backgroundColor = (this.state.hover) ? 'gray' : 'white'
    return (
      <div
        style={this.styles.div}
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}>
        <span>
          <label
            style={this.styles.label}
            onClick={this.removeKeyword}>
            {this.props.keyword}
          </label>
          <div style={this.styles.glyphiconWrapper}>
            <Glyphicon
              style={this.styles.glyphicon}
              bsSize='large'
              glyph='remove' />
          </div>
        </span>
      </div>
    )
  }
})

module.exports = KeywordList
