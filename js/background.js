chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.get(["blocked", "enabled"], function (local) {
    if (!Array.isArray(local.blocked)) {
      chrome.storage.local.set({ blocked: [] });
    }

    if (typeof local.enabled !== "boolean") {
      chrome.storage.local.set({ enabled: false });
    }
  });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
  const url = changeInfo.pendingUrl || changeInfo.url;
  if (!url || !url.startsWith("http")) {
    return;
  }

  const site = new URL(url).hostname;

  chrome.storage.local.get(["blocked", "enabled"], function (local) {
    const { blocked, enabled } = local;
    if (
      Array.isArray(blocked) &&
      enabled &&
      blocked.find((domain) => site.includes(domain))
    ) {
      chrome.tabs.remove(tabId);
    }
  });
});


var currentState = "off";

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.command === "startTimer" && currentState === "off") {
            startTimer(request.minutes, request.seconds);
            sendResponse({message: "Timer Started"})
        }
    }
)

function startTimer(minutes, seconds) {
    var min_int = setInterval(minutesTimer, 60000)
    var sec_int = setInterval(secondsTimer, 1000)

    function minutesTimer() {
        minutes = minutes - 1;
        updateTime(minutes, seconds)
    }

    function secondsTimer() {
    seconds = seconds - 1;
    if (seconds <= 0) {
        seconds = 60
    }
    updateTime(minutes, seconds)
    }


    currentState = "pomodoro"
}

function updateTime(minutes, seconds) {
    chrome.runtime.sendMessage({"command": "updateTime",
                                "minutes": minutes,
                                "seconds": seconds})
}

