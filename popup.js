
chrome.runtime.sendMessage({executeFn: "getSignedInUser"}, (response) => {
    document.getElementById("username").innerHTML = response.profile.upn;
});


/**
 * Sign in button
 */
document.getElementById("sign-in").addEventListener("click", () => {
    chrome.runtime.sendMessage({executeFn: "signIn"}, (response) => {
        document.getElementById("username").innerHTML = response.profile.upn;
    });
});

/**
 * Sign out button
 */
document.getElementById("sign-out").addEventListener("click", () => {
    document.getElementById("username").innerHTML = "";
    document.getElementById("displayname").innerHTML = "";
    
    chrome.runtime.sendMessage({executeFn: "signOut"}, (response) => {
        document.getElementById("username").innerHTML = response.profile.upn;
    });
});