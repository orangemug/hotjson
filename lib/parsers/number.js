module.exports = {
  name: "number",
  check: function(v) {
    return (typeof(v) === "number");
  },
  value: function(v) {
    return JSON.stringify(v);
  }
}
