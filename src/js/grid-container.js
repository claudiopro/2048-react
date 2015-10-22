var React = require('react'),
  GridRow = require('./grid-row'),
  PureRenderMixin = require('react-addons-pure-render-mixin');

var GridContainer = React.createClass({
  mixins: [PureRenderMixin],
  getChildren: function() {
    var children = []
    for (var i = 0; i < this.props.size; i++)
        children.push(<GridRow size={this.props.size}/>);
    return children;
  },
  render: function() {
    return <div className="grid-container">{this.getChildren()}</div>;
  }
});

module.exports = GridContainer;
