var React = require('react'),
  Heading = require('./heading'),
  AboveGame = require('./above-game'),
  GameContainer = require('./game-container'),
  LocalStorageManager = require('./local_storage_manager');

var Container = React.createClass({
  getInitialState: function() {
    return {score: 0, best: new LocalStorageManager().getBestScore()};
  },
  render: function() {
    return (
      <div className="container">
        <Heading score={this.state.score} best={this.state.best}/>
        <AboveGame/>
        <GameContainer size={this.props.size}/>
        <p className="game-explanation">
          <strong className="important">How to play:</strong> Use your <strong>arrow keys</strong> to move the tiles. When two tiles with the same number touch, they <strong>merge into one!</strong>
        </p>
        <hr/>
        <p>
          Created by <a href="http://www.emeraldion.it" target="_blank">Claudio Procida</a>. A clone of <a href="https://gabrielecirulli.github.io/2048/" target="_blank">2048</a> by <a href="http://gabrielecirulli.com" target="_blank">Gabriele Cirulli</a>.
        </p>
      </div>
    );
  }
});

module.exports = Container;
