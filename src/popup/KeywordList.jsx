const React = require('react')

var KeywordList = React.createClass({
  render: function () {
    return (
      <div>
        <KeywordListItem />
      </div>
    )
  }
})

var KeywordListItem = React.createClass({
  render: function () {
    return (
      <div>
        This is a keywordListItem.
      </div>
    )
  }
})

module.exports = KeywordList
