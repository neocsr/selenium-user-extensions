describe('Selenium.prototype.doOpenWindowsInBatch', function() {
  beforeEach(function() {
    spyOn(Selenium.prototype, 'doOpenWindow');
    LOG = { info: function(){} };
  });

  describe('by default', function() {
    it('opens a window', function() {
      Selenium.prototype.doOpenWindowsInBatch();
      expect(Selenium.prototype.doOpenWindow).toHaveBeenCalledWith('', 'window1');
    });
  });

  describe('when a url is not given', function() {
    it('opens several windows', function() {
      Selenium.prototype.doOpenWindowsInBatch(2);
      expect(Selenium.prototype.doOpenWindow).toHaveBeenCalled();
      expect(Selenium.prototype.doOpenWindow.callCount).toBe(2);
      expect(Selenium.prototype.doOpenWindow.mostRecentCall.args[1]).toBe('window2');
    });
  });

  describe('when a url is given', function() {
    it('opens several windows and navigates them to the url', function() {
      Selenium.prototype.doOpenWindowsInBatch(2);
      expect(Selenium.prototype.doOpenWindow).toHaveBeenCalled();
      expect(Selenium.prototype.doOpenWindow.callCount).toBe(2);
    });
  });
});

describe('Selenium.prototype.doCloseWindowsInBatch', function() {
});
