chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "navigateShorts") {
        chrome.tabs.update(sender.tab.id, {url: "https://www.youtube.com/"});
    }
});