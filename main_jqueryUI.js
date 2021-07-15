$( function() {
    $("#accordion").accordion();
  });

$( function() {
  $("#accordion").on("accordionactivate", function( event, ui ) {
/*     $(ui.newHeader).css({"background-color": "yellow"});
    $(ui.oldHeader).css({"background-color": "red"}); */
    $(ui.newPanel).css({"background-color": "yellow"});
    $(ui.oldPanel).css({"background-color": "blue"});
  });
});
