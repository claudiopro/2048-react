var React = require('react');

var AboveGame = React.createClass({
  render: function() {
    return (
      <div className="above-game">
        <p className="game-intro">Join the numbers and get to the <strong>2048 tile!</strong></p>
        <a className="restart-button">New Game</a>
      </div>
    );
  }
});

module.exports = AboveGame;
