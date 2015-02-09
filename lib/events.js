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
