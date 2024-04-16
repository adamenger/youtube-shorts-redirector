let lastUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        if (url.includes("/shorts/")) {
            chrome.runtime.sendMessage({type: "navigateShorts", url: url});
        }
    }
}).observe(document, {subtree: true, childList: true});

// This also listens for history state updates which are used in single-page applications
window.addEventListener('popstate', function(event) {
    const url = location.href;
    if (url.includes("/shorts/")) {
        chrome.runtime.sendMessage({type: "navigateShorts", url: url});
    }
});
