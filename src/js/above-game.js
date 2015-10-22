var React = require('react');

function AboveGame() {
  return (
    <div className="above-game">
      <p className="game-intro">Join the numbers and get to the <strong>2048 tile!</strong></p>
      <a className="restart-button">New Game</a>
    </div>
  );
}

module.exports = AboveGame;
