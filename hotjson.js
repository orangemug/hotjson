!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;"undefined"!=typeof window?o=window:"undefined"!=typeof global?o=global:"undefined"!=typeof self&&(o=self),o.hotjson=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function(tag, str, classes) {
  if(str === undefined) {
    str = "";
  }

  if(classes === undefined) {
    classes = "";
  } else {
    classes = classes.map(function(item) {
      return "hj-"+item;
    }).join(" ");
    classes = "class='"+classes+"'";
  }

  return "<"+tag+" "+classes+">"+str+"</"+tag+">";
};

},{}],2:[function(require,module,exports){
function enable(el) {
  disable(el);

  el.addEventListener("mouseover", function(e) {
    if(e.target.classList.contains("hj-sep")) {
      e.target.parentNode.classList.add("select");
    }
  }, false);

  el.addEventListener("mouseout", function(e) {
    if(e.target.classList.contains("hj-sep")) {
      e.target.parentNode.classList.remove("select");
    }
  }, false);

  el.addEventListener("mousedown", function(e) {
    var target = e.target;

    if(target.classList.contains("hj-t-key")) {
      target.nextSibling.nextSibling.classList.toggle("hide");
    } else if(target.classList.contains("hj-sep")) {
      target.parentNode.classList.toggle("hide");
    } else if(target.parentNode.classList.contains("hide")) {
      target.parentNode.classList.toggle("hide");
    }
  }, false);
}

function disable(el) {
  el.removeEventListener("mousedown", enable, false);
}

module.exports = {
  enable: enable,
  disable: disable
};

},{}],3:[function(require,module,exports){
(function (global){
var parsers = require("./parsers");
var el      = require("./el");

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./el":1,"./parsers":5}],4:[function(require,module,exports){
module.exports = {
  name: "array",
  check: function(v) {
    return Array.isArray(v);
  },
  value: function(v, el, recurse) {
    var pastFirst, out = "";

    v.forEach(function(item) {
      if(pastFirst) {
        out += el(", ", ["sep"]);
      }
      pastFirst = true;

      out += recurse(item);
    });
    return el("[", ["sep"])
      + el(out, ["inner"])
      + el("]", ["sep"]);
  }
}

},{}],5:[function(require,module,exports){
module.exports = [
  require("./object"),
  require("./array"),
  require("./string"),
  require("./number")
];

},{"./array":4,"./number":6,"./object":7,"./string":8}],6:[function(require,module,exports){
module.exports = {
  name: "number",
  check: function(v) {
    return (typeof(v) === "number");
  },
  value: function(v) {
    return JSON.stringify(v);
  }
}

},{}],7:[function(require,module,exports){
module.exports = {
  name: "object",
  check: function(o) {
    return (typeof(o) === "object") && !Array.isArray(o);
  },
  value: function(v, el, recurse) {
    var pastFirst, out = "";

    for(var k in v) {
      if(!v.hasOwnProperty(k)) {
        continue;
      }

      if(pastFirst) {
        out += el(", ", ["sep"]);
      }
      pastFirst = true;

      out += el(
          recurse(k, "key")
        + el(": ", ["colon"])
        + recurse(v[k])
      ,["t-object-item"]);
    }

    return el("{", ["sep"])
      + el(out, ["inner"])
      + el("}", ["sep"]);
  }
}

},{}],8:[function(require,module,exports){
module.exports = {
  name: "string",
  check: function(v) {
    return (typeof(v) === "string");
  },
  value: function(v) {
    return JSON.stringify(v);
  }
}

},{}],9:[function(require,module,exports){
var hotjson = require("./lib/hotjson");
hotjson.events = require("./lib/events");
module.exports = hotjson;

},{"./lib/events":2,"./lib/hotjson":3}]},{},[9])(9)
});