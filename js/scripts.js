//back-end
function list (i){
  var x;
  return x;
}

//user interface
$(document).ready(function() {
  $("form#moja").submit(function(event){
    event.preventDefault();
    var num=parseInt($("input#x").val());
    var x= list(i);
    x.forEach(function(x){
    $("ul#tatu").append("<ul> +x </ul>");
  });
  });
});
