// Generated by CoffeeScript 1.6.2
(function() {
  var Page, Sticker;

  Sticker = (function() {
    function Sticker(data) {
      var _this = this;

      if (data) {
        Object.keys(data).map(function(key) {
          return _this[key] = data[key];
        });
      }
    }

    Sticker.prototype.name = 'unnamed sticker';

    Sticker.prototype.colour = 'yellow';

    Sticker.prototype.imgOff = function() {
      return "assets/sticker-off-" + this.colour + ".png";
    };

    Sticker.prototype.imgOn = function() {
      return "assets/sticker-on-" + this.colour + ".png";
    };

    Sticker.prototype.isColour = function(colour) {
      if (colour.name) {
        return this.colour === colour.name;
      }
      return this.colour === colour.value;
    };

    Sticker.prototype.setColour = function(colour) {
      if (colour.name) {
        return this.colour = colour.name;
      } else {
        return this.colour = colour.value;
      }
    };

    return Sticker;

  })();

  Page = (function() {
    function Page(data) {
      var _this = this;

      if (data) {
        Object.keys(data).map(function(key) {
          return _this[key] = data[key];
        });
      }
    }

    Page.prototype.url = 'http://stub-url';

    Page.prototype.addSticker = function(sticker) {
      console.log("add sticker " + sticker + " to " + this.url);
      if (!this.stickers) {
        this.stickers = [];
      }
      if (!_.include(this.stickers, sticker)) {
        this.stickers.push(sticker);
      }
      return console.log({
        "this": this,
        stickers: this.stickers
      });
    };

    Page.prototype.removeSticker = function(sticker) {
      console.log("remove sticker " + sticker + " from " + this.url);
      return this.stickers = this.stickers.filter(function(e) {
        return e.name !== sticker.name;
      });
    };

    Page.prototype.hasSticker = function(sticker) {
      var _ref;

      if (_.include((_ref = this.stickers) != null ? _ref.map(function(e) {
        return e.name;
      }) : void 0, sticker.name)) {
        return true;
      } else {
        return false;
      }
    };

    return Page;

  })();

  this.Sticker = Sticker;

  this.Page = Page;

}).call(this);
