# random-quote

Returns a random quote from a predefined quotations list.

## Usage

You can use it through https://jacbmelo.github.io/random-quote/ or you can use it from JavaScript:

    <script src="https://code.jquery.com/jquery-3.1.1.min.js" 
            integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" 
            crossorigin="anonymous"></script>
    <script src="https://jacbmelo.github.io/random-quote/random-quote.js"></script>
    <script>
      RandomQuote.getQuote(function(q){
        if (typeof q === 'undefined') {
          console.log('Unable to get random quote!');
        } else {
          console.log('"' + q.quote + '" ~' + q.source);
        }
      });
    </script>
    
## Copyright and license

Code and documentation copyright 2017 [jacbmelo](https://github.com/jacbmelo). Code released under [the MIT license](LICENSE). 
