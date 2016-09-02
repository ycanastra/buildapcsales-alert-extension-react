const React = require('react')

var KeywordList = React.createClass({
  propTypes: {
    keywords: React.PropTypes.array.isRequired
  },
  render: function () {
    return (
      <div>
        {this.props.keywords.map(keyword =>
          <KeywordListItem keyword={keyword} />
        )}
      </div>
    )
  }
})

var KeywordListItem = React.createClass({
  propTypes: {
    keyword: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <div>
        {this.props.keyword}
      </div>
    )
  }
})

module.exports = KeywordList
