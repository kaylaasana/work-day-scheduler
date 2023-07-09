//define current date and display it on the page
var currentDate = dayjs().format("dddd, " + "MMMM, " + "D " + "YYYY");
$("#currentDate").append(currentDate);

//define time and display on page
var currentTime = dayjs().format("h:" + "mm" + " A");
$("#currentTime").append(currentTime).css("font-size", "25px");

$(function () {
  //check local storage for saved data
  $(".description").val(function () {
    var hourSaved = $(this).closest(".time-block").attr("id");
    return localStorage.getItem(hourSaved);
  });
  //event listener that listens for clicks on all save buttons and saves text data to local storage
  $(".saveBtn").on("click", function () {
    var hourSaved = $(this).closest(".time-block").attr("id");
    var savedEvent = $(this).siblings(".description").val();
    localStorage.setItem(hourSaved, savedEvent);
  });

  //grab current time (just the hour)
  var currentHour = dayjs().hour();
  //applies styling from CSS using classes based on the current hour
  for (var i = 9; i < 18; i++) {
    var hourEl = $("#hour-" + i);

    if (currentHour < i) {
      hourEl.addClass("present");
    } else if (currentHour === i) {
      hourEl.addClass("past");
    } else {
      hourEl.addClass("future");
    }
  }
});
