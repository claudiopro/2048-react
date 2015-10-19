var GameManager = require('./game_manager'),
    KeyboardInputManager = require('./keyboard_input_manager'),
    HTMLActuator = require('./html_actuator'),
    LocalStorageManager = require('./local_storage_manager');

// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
});
