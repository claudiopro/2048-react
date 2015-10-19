var ReactDOM = require('react-dom'),
    React = require('react'),
    GridContainer = require('./grid-container'),
    TileContainer = require('./tile-container'),
    GameManager = require('./game_manager'),
    KeyboardInputManager = require('./keyboard_input_manager'),
    HTMLActuator = require('./html_actuator'),
    LocalStorageManager = require('./local_storage_manager');

// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  ReactDOM.render(<div><GridContainer size="4"/><TileContainer/></div>, document.getElementById('attach-point'));

  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
