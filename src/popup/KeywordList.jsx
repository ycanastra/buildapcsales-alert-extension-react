const React = require('react')

const Glyphicon = require('react-bootstrap').Glyphicon

var KeywordList = React.createClass({
  propTypes: {
    keywords: React.PropTypes.array.isRequired,
    removeKeyword: React.PropTypes.func.isRequired
  },
  styles: {
    position: 'relative',
    // marginTop: '45px',
    // marginBottom: '20px',
    overflow: 'auto',
    maxHeight: '500px'
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
      cursor: 'pointer',
      color: 'red'
    }
  },
  getInitialState: function () {
    return {
      hoverKeyword: false,
      hoverRemoveButton: false
    }
  },
  keywordMouseOver: function () {
    this.setState({
      hoverKeyword: true
    })
  },
  keywordMouseOut: function () {
    this.setState({
      hoverKeyword: false
    })
  },
  removeButtonMouseOver: function () {
    this.setState({
      hoverRemoveButton: true
    })
  },
  removeButtonMouseOut: function () {
    this.setState({
      hoverRemoveButton: false
    })
  },
  removeKeyword: function (event) {
    this.props.removeKeyword(this.props.keyword)
  },
  render: function () {
    this.styles.div.backgroundColor = (this.state.hoverKeyword) ? 'rgb(234, 234, 234)' : 'white'
    this.styles.glyphicon.opacity = (this.state.hoverRemoveButton) ? '1' : '0.2'
    return (
      <div
        style={this.styles.div}
        onMouseOver={this.keywordMouseOver}
        onMouseOut={this.keywordMouseOut}>
        <span>
          <label
            style={this.styles.label}>
            {this.props.keyword}
          </label>
          <div style={this.styles.glyphiconWrapper}>
            <Glyphicon
              onMouseOver={this.removeButtonMouseOver}
              onMouseOut={this.removeButtonMouseOut}
              onClick={this.removeKeyword}
              style={this.styles.glyphicon}
              glyph='remove' />
          </div>
        </span>
      </div>
    )
  }
})

module.exports = KeywordList
