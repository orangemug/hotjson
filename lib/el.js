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
