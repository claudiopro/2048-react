var React = require('react'),
  GridRow = require('./grid-row');

var GridContainer = React.createClass({
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
