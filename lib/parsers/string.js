module.exports = {
  name: "string",
  check: function(v) {
    return (typeof(v) === "string");
  },
  value: function(v) {
    return JSON.stringify(v);
  }
}
