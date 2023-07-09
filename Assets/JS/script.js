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

    if (currentHour > i) {
      hourEl.removeClass('present future').addClass('past');
    } else if (currentHour === i) {
      hourEl.removeClass('past future').addClass("present");
    } else {
      hourEl.removeClass('past present').addClass("future");
    }
  }

  //create function that checks time every 1 minute and updates the time on the page. look up setInterval
});
