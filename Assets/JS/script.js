$(function () {
  //function to set up updating time display
  function refreshTime(){
    //define time and display on page
    var currentTime = dayjs().format("h:mm A");
    $("#currentTime").text(currentTime).css("font-size", "25px");
    //define current date and display it on the page
    var currentDate = dayjs().format("dddd, MMMM, D YYYY");
    $("#currentDate").text(currentDate);
  }
  refreshTime();
  //set interval to update every one second to give a relatively accurate time and date on page
  setInterval(refreshTime, 1000);
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

  
  //applies styling from CSS using classes based on the current hour
  for (var i = 9; i < 18; i++) {
    //grab current time (just the hour)
    var currentHour = dayjs().hour();
    var hourEl = $("#hour-" + i);

    if (currentHour > i) {
      hourEl.removeClass('present future').addClass('past');
    } else if (currentHour === i) {
      hourEl.removeClass('past future').addClass("present");
    } else {
      hourEl.removeClass('past present').addClass("future");
    }
  }

  // maybe create function that checks time every 1 minute and updates the time on the page. look up setInterval
});
