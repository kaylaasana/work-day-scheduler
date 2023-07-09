// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


////////////        MY CODE         ////////////

//define current date and display it on the page
var currentDate = dayjs().format('dddd, ' + 'MMMM, ' + 'D ' + 'YYYY');
$('#currentDate').append(currentDate);

//define time and display on page
var currentTime = dayjs().format('h:' + 'mm' + ' A');
$('#currentTime').append(currentTime).css('font-size', '25px');


$(function () {
      
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // add event listener that listens for clicks on ALL save buttons
  // 1. $('.saveBtn').on('click', function() {
        //console.log($(this));
        //figure out what hour block you are in by using $(this);
        //key name needs to match the key names for getItem localStorage
        //setItem for localStorage to save the input of only that particular hour by using 'this'
  // });  

  //grab current time (just the hour)
  var currentHour = dayjs().hour();

  for (var i = 9; i < 18; i++) {   
      var hourEl = $('#hour-' + i);
      
      if (currentHour < i) {
            hourEl.addClass('present');
      }else if (currentHour === i) {
            hourEl.addClass('past');
      }else {
            hourEl.addClass('future');
      }
      
};       

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // 1. getItem for localStorage to pull previously stored content
        // a. have a separate key in localStorage for each hour
        // b. create for loop that starts on hour 9 and runs to hour 18 to check localStorage
              // check localStorage within the loop
              // if there is storage dispaly the items (value) inside the text area of corresponding hour use children/index as possible option

  // TODO: Add code to display the current date in the header of the page.

  // 1. create a variable and use dayjs() to get current date (time optional)
  // 2. $('#currentDay).text(var)

 

});
