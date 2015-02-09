# hotjson ![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)
Render some json and make it look hot.

There is a demo [here](https://orangemug.github.io/hotjson)


## Install
Either grab the standalone file [here](http://orangemug.github.io/hotjson/hotjson.js) or install with npm (and use with browserify)

    npm i git://github.com/orangemug/hotjson.git


## Usage
On the server/client convert a object do a html rendered version

    var hotjson = require("hotjson");
    hotjson(obj); // => "HTML STRING"

Then on the client bind some events to the rendered DOM.

    var hotjson = require("hotjson");
    var el = document.querySelector(".json");
    hotjson.events.enable(el);

There is also some sample css <css/hotjson.css>


## Build
To rebuild, and generate the website run

    npm run build


## Test
No tests just yet... soon though


## License
MIT
