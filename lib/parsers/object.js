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
