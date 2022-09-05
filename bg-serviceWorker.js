chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.executeFn === "signIn") {
        globalThis.signIn().then((r) => {
            sendResponse(r);
        });
    } else if (request.executeFn === "signOut") {
        globalThis.signOut();
        sendResponse(null);
    } else if (request.executeFn === "getSignedInUser") {
        globalThis.getSignedInUser().then((r) => {
            sendResponse(r);
        });
    }
    return true; // must return true for async listeneres
});
