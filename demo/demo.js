document.addEventListener("DOMContentLoaded", function() {
  var editorEl  = document.querySelector(".editor");
  var hotjsonEl = document.querySelector(".hotjson");
  var errorEl   = document.querySelector(".error");

  hotjson.events.enable(hotjsonEl);

  render();
  editorEl.addEventListener("keyup", render, false);

  function render() {
    editorEl.style.height = editorEl.scrollHeight+"px"; 

    try {
      var obj = JSON.parse(editorEl.value);
    } catch(err) {
      console.error(err);
      errorEl.innerHTML = err;
      return;
    }

    var out = hotjson(obj);
    hotjsonEl.innerHTML = out;
    errorEl.innerHTML = "";
  }
});
