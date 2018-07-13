$( document ).ready(function() {

$("#arrow_right").click(function() {
  var active = $(".active").removeClass("active");
    if (!active.next().length == 0) {
      active.next().addClass("active");
    } else {
      active.siblings(":first").addClass("active");
    }

});
$("#arrow_left").click(function() {
  var active = $(".active").removeClass("active");
    if (!active.prev().length == 0) {
      active.prev().addClass("active");
    } else {
      active.siblings(":last").addClass("active");
    }
});

});
