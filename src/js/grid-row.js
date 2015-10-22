var React = require('react'),
  GridCell = require('./grid-cell'),
  PureRenderMixin = require('react-addons-pure-render-mixin');

var GridRow = React.createClass({
  mixins: [PureRenderMixin],
  getChildren: function() {
    var children = []
    for (var i = 0; i < this.props.size; i++)
        children.push(<GridCell/>);
    return children;
  },
  render: function() {
    return <div className="grid-row">{this.getChildren()}</div>;
  }
});

module.exports = GridRow;
