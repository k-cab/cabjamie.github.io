// Generated by CoffeeScript 1.6.2
(function() {
  var that;

  that = this;

  this.appModule.config(function(RestangularProvider, userPrefsProvider) {
    var userPrefs;

    userPrefs = userPrefsProvider.$get();
    RestangularProvider.setBaseUrl(userPrefs.apiServer + "/mackerel");
    return RestangularProvider.setFullRequestInterceptor(function(el, op, what, url, headers, params) {
      headers['x-username'] = 'sohocoke';
      return {
        headers: headers,
        params: params,
        element: el
      };
    });
  });

  this.appModule.factory('stubDataSvc', function($log, $http, $resource, Restangular) {
    var obj;

    obj = {
      init: function() {},
      fetchPage: function(params) {
        var deferred;

        deferred = Q.defer();
        Restangular.one('page').get(params).then(function(pageData) {
          var page;

          page = new Page(pageData);
          page.stickers = page.stickers.map(function(e) {
            return new Sticker(e);
          });
          return deferred.resolve(page);
        });
        return deferred.promise;
      },
      savePage: function(page) {
        var deferred;

        deferred = Q.defer();
        Restangular.copy(page).post().then(function(pageData) {
          return deferred.resolve(page);
        });
        return deferred.promise;
      },
      fetchStickers: function(page) {
        var deferred;

        deferred = Q.defer();
        Restangular.all('stickers').getList().then(function(stickersData) {
          var results;

          results = stickersData.map(function(e) {
            return new that.Sticker(e);
          });
          return deferred.resolve(results);
        });
        return deferred.promise;
      },
      createSticker: function(sticker) {
        var deferred;

        deferred = Q.defer();
        $resource(userPrefs.apiServer + '/mackerel/stickers').save(sticker, function(stickerData) {
          sticker.id = stickerData.guid;
          return deferred.resolve(sticker);
        });
        return deferred.promise;
      },
      updateSticker: function(sticker) {
        var deferred;

        deferred = Q.defer();
        $resource(userPrefs.apiServer + '/mackerel/stickers').save(sticker, function(stickerData) {
          return deferred.resolve(sticker);
        });
        return deferred.promise;
      },
      deleteSticker: function(sticker) {
        sticker.name = "archived - " + sticker.name;
        return obj.updateSticker(sticker);
      },
      persist: function(type, modelObj, resultHandler) {
        return Q.fcall(function() {
          $log.error("stub persist called");
          return null;
        });
      },
      fetchItems: function(params, resultHandler) {
        return Q.fcall(function() {
          $log.error("stub fetchItems called");
          return null;
        });
      }
    };
    return obj;
  });

}).call(this);
