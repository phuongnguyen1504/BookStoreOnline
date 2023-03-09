// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_book: 'http://localhost:8080/api/book',
  api_auth: 'http://localhost:8080/api/auth',
  user_api: 'http://localhost:8080/api/user',
  customer_api: 'http://localhost:8080/api/customer',
  cart_api: 'http://localhost:8080/api/cart',
  category_api: 'http://localhost:8080/api/category',
  firebaseConfig : {
    apiKey: "AIzaSyCJQmu1QneFQyWt_9k8MWWJZGXL-uTG7fg",
    authDomain: "bookstore-9a26b.firebaseapp.com",
    databaseURL: "https://bookstore-9a26b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bookstore-9a26b",
    storageBucket: "bookstore-9a26b.appspot.com",
    messagingSenderId: "119040611053",
    appId: "1:119040611053:web:71835dd1221c3ec4bc72e4",
    measurementId: "G-E8CTPZE947"
  },
  dialogflow: {
    angularBot: '1cb32c3d-17eb-4fc0-a4db-f6fb949a45c4'
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
