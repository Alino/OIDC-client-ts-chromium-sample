try {
    importScripts(
      'dependencies/jsdom-min.js',
      'bg-initMocks.js',
      'dependencies/oidc-client-ts.min.js',
      'bg-auth.js',
      'bg-serviceWorker.js'
    );
  } catch (e) {
    console.error(e);
  }