// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDate = dayjs().format('MM-DD-YYYY h:mm');
var currentHour = parseInt(dayjs().format('H'));

$(function () {

  $('#currentDay').text(currentDate);

  var timeBlocks=$('.time-block')
for (var i=0; i< timeBlocks.length;i++){
  var block = $(timeBlocks[i]);
  var blockHour = parseInt(block.attr('id').split('-')[1]);   
console.log(currentHour)

  

 if (blockHour < currentHour){
  block.addClass('past');
} else if (blockHour===currentHour){
  block.addClass('present');
} else {
  block.addClass('future');
}
}});

$('.saveBtn').click(function(){
  var task = $(this).siblings('.description').val()
  
  var taskTime = $(this).parent().attr('id')

  localStorage.setItem(taskTime, task)

})

for (var i = 9; i< 18; i++){
  
  $('#hour-'+i+" .description").val(localStorage.getItem('hour-'+i))
}


// Variables at top, then functions, then event listenter at bottom

// TODO: Add a listener for click events on all of the save buttons. This code should
// use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
//1. 
//$('.saveBtn').on("click", funtion() {
//console.log($(this));
// figure out what hour block youre in by using $(this)
// key names needs to match the key names for getItem localStorage
 
//--this selects every element that has that class
// setItem for localStorage to save the input to corresponding hour by using keyword 'this' to figure out 
//2. 




  //FIRST
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

// 1. Use JQUERY.children (?) to select child elements 

//document.querySelectorAll('.time-block')//this would give an array of all elements with this class name
//but we need to use JQUERY so dont use this.. 

// 2. use dayjs() to grab current time (just the hour)
// 3. Create for loop to go over all the time blocks. 

// inside the forloop selected the time block
      //for(i=9; i <18; i++) // MILITARY TIME
     // document.querySelector('#hour-' + i)// USE JQUERY SELECTOR
      
    // a. use if statement to compare the actual hour vs hour of that block to determine past present or future class 
    // b. if current hour less than current time block, then block is future
    // c. "else if" the current hour is equal to time block apply present class   
    // d. "else" the current hour is greater  to time block apply past class 
    //4. remove past, present and futre class in html and appent the correct class
    //5. can use setInterval to create auto refresh



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
      // 1. getItem for localStorage to pull previously stored content
          //a. Have a separate key in localStorage for each hour
          //.b create a for loop for hour 9- 18 
              //a. check localStorage within the lopp
              //localStorage.getItem()
              // if there is something in storage we need to display the items (this will be hard) (maybe add id to text area?)
              //inside text area of corresponding hour
              //use id selector for the text area
        //2. 







  //
  // TODO: Add code to display the current date in the header of the page.-----DONE
    //1. create var for dayjs to get current date (just the date) add time optional
    //2. $('currentDay').txt(var) to display date
    







