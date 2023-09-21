  // wrapping code
$(document).ready(function () {

  //code to display the current date in the header of the page.
var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM DD YYYY'));


function timeTracker() {
  //get current number of hours.
  var timeNow = dayjs().format("HH");

// loop over time blocks
$(".time-block").each(function () {
  var timeBlock = $(this).attr("id").split("-")[1];

    // To check the time and add the classes for background indicators
    if (timeBlock < timeNow) {
          $(this).removeClass("future");
          $(this).removeClass("present");
          $(this).addClass("past");
      }
    else if (timeBlock === timeNow) {
          $(this).removeClass("past");
          $(this).removeClass("future");
          $(this).addClass("present");
      }
    else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");

      }
  });
}

//saves values to local storage upon clicking save button
$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});

//retrieves values from local storage
$("#hour-09 .description").val(localStorage.getItem("hour-09"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

timeTracker();

});
