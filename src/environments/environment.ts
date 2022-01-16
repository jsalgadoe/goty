// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url:'http://localhost:5000/graficos-firebase/us-central1',
  firebaseConfig : {
    apiKey: "AIzaSyDD9MxPYFWnIRnat3FPDcGtGfvnzIzMHPE",
    authDomain: "graficos-firebase.firebaseapp.com",
    projectId: "graficos-firebase",
    storageBucket: "graficos-firebase.appspot.com",
    messagingSenderId: "820742273615",
    appId: "1:820742273615:web:7135d69c76dd953f76083a"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
