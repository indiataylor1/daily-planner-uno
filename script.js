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
      $(this).addClass("future")  
      $(this).removeClass("past")
      $(this).removeClass("present")
    }
    
  })
}
auditTask();



// else {
//   $(this).removeClass('past');
//   $(this).removeClass('present');
//   $(this).removeClass('future');
// }

// else {
//   $(this).removeClass('past');
//   $(this).removeClass('present');
//   $(this).removeClass('future');
// }


$(function () {
 
});

