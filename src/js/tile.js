var React = require('react'),
  classnames = require('classnames');

var _Tile = React.createClass({
    getInitialState: function() {
      return {
        previousPosition: null,
        mergedFrom:       null,
        isNew:            true
      };
    },
    render: function() {
      var classnames_ = classnames('tile',
      ['tile-position', this.props.x, this.props.y].join('-'), {
        'tile-new' : this.state.isNew
      })
      return (
        <div className={classnames_}><div className="tile-inner">{this.props.value}</div></div>
      );
    },
    componentDidUpdate: function() {
      this.setState({
        previosuPosition: {
          x: this.props.x,
          y: this.props.y
        },
        isNew: false
      });
    }
});

function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};

module.exports = {
  Tile: Tile,
  ReactTile: _Tile
};
