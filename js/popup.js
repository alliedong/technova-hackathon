var minutes_work = 25
var minutes_break = 5
var seconds = "00"


function template() {
    addMessageListeners()
    document.getElementById("minutes").innerText = minutes_work;
    document.getElementById("seconds").innerText = seconds;
    start()
}

function start(){
    minutes_work = 24
    seconds = 59
    document.getElementById("minutes").innerText = minutes_work;
    document.getElementById("seconds").innerText = seconds;

    chrome.runtime.sendMessage({"command": "startTimer", "minutes": minutes_work, "seconds": seconds},
        function(response) {
            console.log(response)
        })
}

function addMessageListeners() {
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            if (request.command === "updateTime") {
                var min = request.minutes
                var sec = request.seconds
                document.getElementById("minutes").innerText = min;
                document.getElementById("seconds").innerText = sec;
            }
        })
}

document.addEventListener('DOMContentLoaded', template);