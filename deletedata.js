

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBQ75mL_tGG7DHgjh3u0_n_m-H6i3Qg_xM",
    authDomain: "test-pastmoos.firebaseapp.com",
    databaseURL: "https://test-pastmoos-default-rtdb.firebaseio.com",
    projectId: "test-pastmoos",
    storageBucket: "test-pastmoos.appspot.com",
    messagingSenderId: "130244640247",
    appId: "1:130244640247:web:62192c97a93d81ba95c2f2",
    measurementId: "G-XFD7NKTDZV"
  };
  firebase.initializeApp(firebaseConfig);

  // Get a reference to the Firebase Realtime Database
  var database = firebase.database();

  function deleteData() {
    // Specify the data to be deleted
    var dataToDelete = {
      
    };

    // Get a reference to the node that contains the data to be deleted
    var ref = database.ref('Cart/');

    // Remove the specified data from the Firebase Realtime Database
    ref.remove(dataToDelete, function(error) {
      if (error) {
        console.log('Data could not be deleted: ' + error);
      } else {
        console.log('Data deleted successfully.');
      }
    });
  }