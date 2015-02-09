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
