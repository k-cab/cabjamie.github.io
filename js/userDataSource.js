// Generated by CoffeeScript 1.6.2
(function() {
  Parse.initialize("RnNIA4148ExIhwBFNB9qMGci85tOOEBHbzwxenNY", "5FSg0xa311sim8Ok1Qeob7MLPGsz3wLFQexlOOgm");

  this.appModule.factory('userDataSource', function($log) {
    return {
      fetch: function(dataType, params, resultHandler) {
        return this.fetch_parse(dataType, params, resultHandler);
      },
      fetch_stub: function(dataType, resultHandler) {
        var results;

        results = [
          {
            name: "stub-sticker-1"
          }, {
            name: "stub-sticker-2"
          }, {
            name: "stub-sticker-3"
          }
        ];
        results.forEach(function(e) {
          return e.get = function(name) {
            return this[name];
          };
        });
        return resultHandler(results);
      },
      fetch_parse: function(dataType, params, resultHandler) {
        var Page, Sticker, query;

        switch (dataType) {
          case 'stickers':
            Sticker = Parse.Object.extend('Sticker');
            query = new Parse.Query(Sticker);
            break;
          case 'items':
            Page = Parse.Object.extend('Page');
            query = new Parse.Query(Page);
            query.equalTo('stickers', params[0]);
            break;
          default:
            throw "unknown data type " + dataType;
        }
        return query.find({
          success: function(results) {
            $log.info("Successfully retrieved " + results.length + " entries.");
            return resultHandler(results);
          },
          error: function(error) {
            $log.info("Error: " + error.code + " " + error.message);
            return resultHandler(error);
          }
        });
      },
      persist: function(modelObj) {
        return this.persist_parse(modelObj);
      },
      persist_parse: function(modelObj) {
        var properties, stickersRelation,
          _this = this;

        switch (modelObj.className) {
          case 'Page':
            properties = ['url'];
            if (modelObj.stickers) {
              $log.info({
                stickers: modelObj.stickers
              });
              stickersRelation = modelObj.relation('stickers');
              stickersRelation.add(modelObj.stickers);
            }
        }
        properties.forEach(function(p) {
          return modelObj.set(p, modelObj[p]);
        });
        return modelObj.save(null, {
          success: function(theObj) {
            return $log.info("save successful");
          },
          error: function(theObj) {
            return $log.info("save failed");
          }
        });
      }
    };
  });

}).call(this);

/*
//@ sourceMappingURL=userDataSource.map
*/
