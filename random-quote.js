/**
 * UMD module exposing a method to return a random quote.
 * (c) 2017 jacbmelo
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    
    // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    
    // CommonJS
    module.exports = factory(require('jquery'));
  } else {
    
    // Browser globals (Note: root is window)
    root.RandomQuote = factory(root.$);
  }
} (this, function ($) {
  
  // Define Module
  var RandomQuote = {
    
    /**
     * Gets a random image URL from data.json and calls a callback function with this URL.
     */
    getQuote: function(callback) {
      $.getJSON('data.json').done(function(data) {
        var o = data[Math.floor(Math.random() * data.length)];
        callback(o);
      }).fail(function(jqXHR, textStatus, errorThrown) {
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
      }).always(function() {});
    }
  }

  // Expose object
  return RandomQuote;
}));
