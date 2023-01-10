//Dayjs Date and 24 hour time //

const dayJsObject = dayjs();

console.log(dayJsObject.format("D/M/YYYY")); 



document.getElementById("dateAndTime").innerHTML = dayJsObject;

//Event Listener save button
$('.saveBtn').on('click', function() {
  var textValue = $(this).siblings('.description').val();
  var timeKey = $(this).parent().attr('id')

  localStorage.setItem(timeKey, textValue);
});

// local storage
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

//color change for past present future events
function auditTask(){
  var currentHour = (dayjs().get('hour'));
  $('.time-block').each(function () {
    var timeId = parseInt($(this).attr('id').split("-")[1]);
    if(currentHour === timeId) {
      $(this).addClass("present")
      $(this).removeClass("past")
    } else if(currentHour > timeId) {
      $(this).addClass("past")
      $(this).removeClass("future")
      $(this).removeClass("present")      
    } else {
      $(this).addClass("future")  //PROBLEM 3: Past events do not change to grey - something wrong with the remove class
      $(this).removeClass("past")
      $(this).removeClass("present")
    }
    
  })
}
auditTask();

//this comment go here

// else {
//   $(this).removeClass('past');
//   $(this).removeClass('present');
//   $(this).removeClass('future');
// }
// //this comment go here 
// else {
//   $(this).removeClass('past');
//   $(this).removeClass('present');
//   $(this).removeClass('future');
// }



// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
 

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the current hour in 24-hour time? 


  //
  // TODO: Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
});

