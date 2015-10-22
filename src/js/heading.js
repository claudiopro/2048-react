var React = require('react'),
  PureRenderMixin = require('react-addons-pure-render-mixin')

var Heading = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div className="heading">
        <h1 className="title">2048</h1>
        <div className="scores-container">
          <div className="score-container">{this.props.score}</div>
          <span>&nbsp;</span>
          <div className="best-container">{this.props.best}</div>
        </div>
      </div>
    );
  }
});

module.exports = Heading;
