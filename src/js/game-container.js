var React = require('react'),
  TileContainer = require('./tile-container'),
  GridContainer = require('./grid-container');

var GameContainer = React.createClass({
  render: function() {
    return (
      <div className="game-container">
        <div className="game-message">
          <p></p>
          <div className="lower">
            <a className="keep-playing-button">Keep going</a>
            <a className="retry-button">Try again</a>
          </div>
        </div>

        <GridContainer size={this.props.size}/>
        <TileContainer size={this.props.size} tiles={this.props.tiles} />
      </div>
    );
  }
});

module.exports = GameContainer;
