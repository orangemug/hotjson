# hotjson
Render some json and make it look hot.


## Usage
On the server/client convert a object do a html rendered version

    var hotjson = require("hotjson");
    hotjson(obj); // => "HTML STRING"

Then on the client bind some events to the rendered DOM.

    var hotjson = require("hotjson");
    var el = document.querySelector(".json");
    hotjson.events.enable(el);


## License
MIT
