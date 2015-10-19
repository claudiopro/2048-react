var React = require('react'),
  Heading = require('./heading'),
  AboveGame = require('./above-game'),
  GameContainer = require('./game-container'),
  StorageManager = require('./local_storage_manager'),
  Grid = require('./grid'),
  Tile = require('./tile').Tile;

var storageManager = new StorageManager();
var previousState = storageManager.getGameState();

var Container = React.createClass({
  componentWillMount: function() {
    // Reload the game from a previous game if present
    if (previousState) {
      this.grid        = new Grid(previousState.grid.size,
                                  previousState.grid.cells); // Reload grid
      this.score       = previousState.score;
      this.over        = previousState.over;
      this.won         = previousState.won;
      this.keepPlaying = previousState.keepPlaying;
    } else {
      this.grid        = new Grid(this.props.size);
      this.score       = 0;
      this.over        = false;
      this.won         = false;
      this.keepPlaying = false;
    }
    this.setState({score: this.score, best: storageManager.getBestScore(), tiles: this.getRandomTiles()});
  },
  getRandomTiles: function() {
    var ret = [];
    for (var i = 0; i < this.props.startTiles; i++) {
      ret.push(this.getRandomTile())
    }
    return ret;
  },
  getRandomTile: function() {
    var value = Math.random() < 0.9 ? 2 : 4;
    var pos = this.grid.randomAvailableCell();
    var tile = new Tile(pos, value);
    this.grid.insertTile(tile);
    return {
      value: value,
      x: pos.x,
      y: pos.y
    };
  },
  render: function() {
    return (
      <div className="container">
        <Heading score={this.state.score} best={this.state.best}/>
        <AboveGame/>
        <GameContainer size={this.props.size} tiles={this.state.tiles} />
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
