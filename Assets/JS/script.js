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

  //First
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // 0. use jquery.children to select the parent element of the child we want to conver into array (time blocks)

  // document.querySelectorAll("time-block"); < -- use this method in jquery to select entire class to target an array of the time blocks in for loop described below vv

  // 1. use dayjs() to grab current time (just the hour)
  // 2. use for loop for all the time blocks 
        // 0. inside the for loop select the time block
        //start for loop with i = 9 rather than 0; i < 18; i++
        // document.querySelector('#hour-' + i); < -- jquery version
        //a. use if statement to compare the current hour to the hour of the block we are on  (ex: compare to 9a then 10a then 11a etc etc)
        // b. if the current hour is less than time block apple future class
        // c. else if the current time is equal to time block apply present class
        // d. else the current time is greater than time block apply past class
  // 3. remove past, present and future class in html and append the correct class       

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
