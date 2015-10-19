var ReactDOM = require('react-dom'),
    React = require('react'),
    Container = require('./container'),
    GameManager = require('./game_manager'),
    KeyboardInputManager = require('./keyboard_input_manager'),
    HTMLActuator = require('./html_actuator'),
    LocalStorageManager = require('./local_storage_manager');

// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  ReactDOM.render(<Container size="4" startTiles="2" />, document.getElementById('attach-point'));

  // new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
