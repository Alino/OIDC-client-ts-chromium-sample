# OIDC-client-ts - Chromium Extension Sample

This folder contains a sample Chromium extension demonstrating how to integrate OIDC library, with a workaround for chromium manifest v3.

key points:
- runs inside the extension service worker (former background page). Inside the service worker it:
  - mocks global window object with JSDOM
  - mocks global localStorage and sessionStorage API and maps it synchronously to the chrome.storage API
  - exposes global function signIn() and signOut() and getSignedInUser()

## Setup

1. Create a [new app registration](https://docs.microsoft.com/azure/active-directory/develop/quickstart-register-app) in the Azure Portal.
1. Provide your client ID in the `PublicClientApplication` configuration in `auth.js`.
1. Under the **Authentication** tab, add a new redirect URI under **Single-page application**.
1. The url of this redirect URI should be of the format `https://<extension-id>.chromiumapp.org`, e.g. `https://epfnbngoodhmbeepjlcohfacgnbhbhah.chromiumapp.org/`.
1. You should also set this url as the **Logout URL**.
1. Your extension ID can be found on the Extensions settings page after the extension has been loaded, or by invoking `chrome.identity.getRedirectURL()` in the extension.

## Running the extension

1. On the **Extensions** settings page, click the **Load unpacked** button, and select this folder.
1. The extension will appear in the browser toolbar.
1. **Note:** Because this extension relies on the `chrome.identity` APIs, it will not work in incognito/private browsing.
1. The extension demonstrates how to login, acquire tokens, and logout using OIDC-client-ts library.