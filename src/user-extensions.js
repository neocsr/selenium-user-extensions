Selenium.prototype.doOpenWindowsInBatch = function(number, options) {
  number = number || 1;
  options = options || {};
  this._windowsInBatchNames = [];

  var prefix = options.prefix || 'window';

  for (var i = 0; i < number; i++) {
    this._windowsInBatchNames[i] = prefix + (i + 1);
    this.doOpenWindow('', this._windowsInBatchNames[i]);
  }

  LOG.info('Executing: | openWindowsInBatch | ' + number + ' | prefix=' + prefix);
};
