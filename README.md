# Day-Planner

## Technology Used

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Description

[Visit The Deployed Site](https://thomasmunzar.github.io/Day-Planner/)

The goal of this project was to create a daily planner for your average work week. I was given starter code so I did not focus too much on HTML or CSS, I did spend a long time making the JavaScript do what I wanted it to do on with the website.  First, I connected the site to Day.js to allow myself to use a live clock and calendar for the site. Linking to this powerful tool allowed me to make functions that ; showed past present and future time slot with different colors and display the current date and time in the header.  It was really cool to just link to this tool using a simple link :

```HTML
<script
      src="https://cdn.jsdelivr.net/npm/dayjs@1.11.3/dayjs.min.js"
      integrity="sha256-iu/zLUB+QgISXBLCW/mcDi/rnf4m4uEDO0wauy76x7U="
      crossorigin="anonymous"
    ></script>
```

Here is a screenshot of the final page (sorry i took the screenshot after a "work day" so everything is in that "past")

![Day-Planner-Webpage](./Assets/127.0.0.1_5500_index.html%20(1).png)

## Learning-Points

This assignment, although not requiring a TON of code, was tricky.  Im proud that it was a bit easier to figure out a for loop but not much easier. The trickiest and coolest part of code in this project for me was this:

```S
$('.saveBtn').click(function(){
  var task = $(this).siblings('.description').val()
  
  var taskTime = $(this).parent().attr('id')

  localStorage.setItem(taskTime, task)

})
```

I had ALOT of trouble figuring out how to have Tasks save in each time slot based on the hour. Luckily I had help from a tutor and was able to have it explained to me thouroghly as we figured this part out.

Essentially this we are selecting all the class='.saveBtn' and assigning a event-listener to all of this. We are using JQUERY to do this which im realizing is a great tool becuase I was really about to make an event listenter for each button which would have not been great. We then used 'this' which refers to the clicked save button and find the sibling to that button which is descrption, finally '.val()' retrieves the text that was put in that area and assigns it to var task.  The next line deals with finding the hour in which the tast was written in by finding the ID in the parent element of the saveBtn class for that time box.

It really really helped to read though this over and over again for me after i did it.

## Author Info

### Thomas Munzar

* [Portfolio](https://thomasmunzar.github.io/portfolio-thomas/)
* [LinkedIn](https://www.linkedin.com/in/thomas-munzar-659b51250/)
* [Github](https://github.com/ThomasMunzar)

##
Thank you to my fellow classmates, teachers, TA's, Tutors for helping me and creating a supportive community.

## License
MIT License

Copyright (c) [2023] [Thomas Munzar]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

