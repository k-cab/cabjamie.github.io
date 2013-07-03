// Generated by CoffeeScript 1.6.2
(function() {
  var that;

  that = this;

  this.appModule.factory('stubDataSvc', function($log, $http) {
    var obj;

    obj = {
      init: function() {},
      fetchPage: function(params) {
        return Q.fcall(function() {
          var result;

          result = new that.Page();
          result.url = params.url;
          result.stickers = [
            {
              name: "stub-sticker-3"
            }
          ];
          return result;
        });
      },
      fetchStickers: function(page) {
        return Q.fcall(function() {
          var results;

          results = [
            {
              id: 1,
              name: "stub-sticker-1"
            }, {
              id: 2,
              name: "stub-sticker-2"
            }, {
              id: 3,
              name: "stub-sticker-3"
            }
          ];
          results = results.map(function(e) {
            return new that.Sticker(e);
          });
          return results;
        });
      },
      fetchItems: function(params, resultHandler) {
        return Q.fcall(function() {
          $log.error("stub fetchItems called");
          return null;
        });
      },
      updateSticker: function(sticker) {
        return Q.fcall(function() {
          $log.error("stub updateSticker called");
          return null;
        });
      },
      persist: function(type, modelObj, resultHandler) {
        return Q.fcall(function() {
          $log.error("stub persist called");
          return null;
        });
      }
    };
    return obj;
  });

}).call(this);
