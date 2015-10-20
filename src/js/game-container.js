var React = require('react'),
  classnames = require('classnames'),
  TileContainer = require('./tile-container'),
  GridContainer = require('./grid-container');

var GameContainer = React.createClass({
  render: function() {
    var classes_ = classnames('game-message', {
      'game-won': this.props.won,
      'game-over': this.props.over
    });
    var message = this.props.won ? "You win!" : "Game over!";
    return (
      <div className="game-container">
        <div className={classes_}>
          <p>{message}</p>
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
