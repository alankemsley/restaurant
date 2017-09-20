$(document).ready(function() {
  
  //Floating action button
  $("#reservation-button").on("mouseover", function() {
    $("#reservation-button").children("a").removeClass("pulse");
  });

  //Trigger modal
  $(".modal").modal();

  //Submit
  $("#submit").on("click", function(event) {
    event.preventDefault();
    $('#reservation-modal').modal('close');
    Materialize.toast("Your reservation has been made.", 2000);
  });
  
});