
const firebaseConfig = {
  apiKey: "AIzaSyBCUdVQ8VLQGODNvwOhAHJzIItfaXaNQMs",
  authDomain: "examenmediocurso.firebaseapp.com",
  databaseURL: "https://examenmediocurso-default-rtdb.firebaseio.com",
  projectId: "examenmediocurso",
  storageBucket: "examenmediocurso.appspot.com",
  messagingSenderId: "990876938776",
  appId: "1:990876938776:web:9093401dc23c50c4e0496d",
  measurementId: "G-J693XVKD4V"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Obtener referencias a los elementos del DOM
var IoTApp = document.getElementById('IoTApp');
var dbRef = firebase.database();
var temperatura = 0;
var altura = 0;
var presion = 0;

// Referencias a los datos en Firebase
let dbtemperatura = dbRef.ref("ESP32IoTApp/temperatura/");
dbtemperatura.on('value', function(snapshot) {
  console.log("El valor del temperatura es", snapshot.val());
  temperatura = snapshot.val();
  document.getElementById("temperaturaId").innerHTML = "temperatura = " + temperatura + "°C";
});

let dbpresion = dbRef.ref("ESP32IoTApp/presion/");
dbpresion.on('value', function(snapshot) {
  console.log("El valor del presion es", snapshot.val());
  presion = snapshot.val();
  document.getElementById("presionId").innerHTML ="presion = " + presion + "mmHg";
});

let dbaltura = dbRef.ref("ESP32IoTApp/altura/");
dbaltura.on('value', function(snapshot) {
  console.log("El valor del altura es", snapshot.val());
  altura = snapshot.val();
  document.getElementById("alturaId").innerHTML = "altura = " + altura + "m";
});



   



