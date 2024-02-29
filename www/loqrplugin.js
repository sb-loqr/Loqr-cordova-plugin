// Empty constructor
function LoqrPlugin() {}

// The function that passes work along to native shells
// Message is a string, duration may be 'long' or 'short'
LoqrPlugin.prototype.show = function(message, duration, successCallback, errorCallback) {
  var options = {};
  options.message = message;
  options.duration = duration;
  cordova.exec(successCallback, errorCallback, 'LoqrPlugin', 'show', [options]);
}

// Installation constructor that binds LoqrPlugin to window
LoqrPlugin.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }
  window.plugins.loqrPlugin = new LoqrPlugin();
  return window.plugins.loqrPlugin;
};
cordova.addConstructor(LoqrPlugin.install);