// create the html structure to hold the time blocks
// create an array to hold each time block's information
// color code the time blocks based on past, present, and future categories by using moment.js
// store data in localstorage and populate descriptions with saved information

// retrieves and stores the current time in integer format
var currentTime = moment().format("H");
console.log("Current Time: " + currentTime);


// checks for a stored array of task information to use, if none exist, a fresh one is created
var taskArray = JSON.parse(localStorage.getItem("tasks"));
if (!taskArray) {
    console.log("A fresh taskArray has been generated");
    taskArray = [
        {
            "id": "hour-9",
            "hour": 9,
            "description": ""
        },
        {
            "id": "hour-10",
            "hour": 10,
            "description": ""
        },
        {
            "id": "hour-11",
            "hour": 11,
            "description": ""
        },
        {
            "id": "hour-12",
            "hour": 12,
            "description": ""
        },
        {
            "id": "hour-13",
            "hour": 13,
            "description": ""
        },
        {
            "id": "hour-14",
            "hour": 14,
            "description": ""
        },
        {
            "id": "hour-15",
            "hour": 15,
            "description": ""
        },
        {
            "id": "hour-16",
            "hour": 16,
            "description": ""
        },
        {
            "id": "hour-17",
            "hour": 17,
            "description": ""
        }
    ]
}


// displays the current date in real time
$("#currentDay").html(moment().format("dddd, MMMM Do"));


// color coding of the time blocks to indicate past present and future times
for (i=0;i<taskArray.length;i++) {
    if (taskArray[i].hour < currentTime) {
        $("#hour-" + [i+9] + " textarea").addClass("past");
    } else if (taskArray[i].hour == currentTime) {
        $("#hour-" + [i+9] + " textarea").addClass("present");
    } else {
        $("#hour-" + [i+9] + " textarea").addClass("future");
    }
}