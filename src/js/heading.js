var React = require('react');

var Heading = React.createClass({
  render: function() {
    return (
      <div className="heading">
        <h1 className="title">2048</h1>
        <div className="scores-container">
          <div className="score-container">{this.props.score}</div>
          <div className="best-container">{this.props.best}</div>
        </div>
      </div>
    );
  }
});

module.exports = Heading;
