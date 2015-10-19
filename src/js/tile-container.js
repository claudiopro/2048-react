var React = require('react'),
  Tile = require('./tile').ReactTile;

var TileContainer = React.createClass({
  getChildren: function() {
    var children = [];
    this.props.tiles.forEach(function(item) {
      children.push(<Tile x={item.x} y={item.y} value={item.value} key={item.prog}/>);
    });
    return children;
  },
  render: function() {
    return <div className="tile-container">{this.getChildren()}</div>;
  }
});

module.exports = TileContainer;
