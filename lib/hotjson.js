var parsers = require("./lib/parsers");
var el      = require("./lib/el");

module.exports = function(obj, opts) {
  var parsersLen = parsers.length;
  var _el = el.bind(global, "span");

  function recurse(depth, obj, klass) {
    var idx, parser;
    var depthRecurse = recurse.bind(global, depth+1);
    klass = klass || "";

    for(idx=0; idx<parsersLen; idx++) {
      parser = parsers[idx];
      if(parser.check(obj)) {
        break;
      }
    }

    var html = parser.value(obj, _el, depthRecurse);
    return _el(html, [
      "t",
      "t-"+parser.name,
      "t-"+klass,
      "depth-"+depth
    ]);
  }

  return recurse(0, obj);
}
