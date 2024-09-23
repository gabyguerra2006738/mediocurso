// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 


const firebaseConfig = {
  apiKey: "AIzaSyDdKVLSNJyEYOFIT8PJAzDeJnGRF7aHMWw",
  authDomain: "esp32iot-c7048.firebaseapp.com",
  databaseURL: "https://esp32iot-c7048-default-rtdb.firebaseio.com",
  projectId: "esp32iot-c7048",
  storageBucket: "esp32iot-c7048.appspot.com",
  messagingSenderId: "637606995653",
  appId: "1:637606995653:web:91e09f53cc57281e5d72ac",
  measurementId: "G-L82P2VYH2R"
};

firebase.initializeApp(firebaseConfig);
var IoTApp = document.getElementById('IoTApp');
var dbRef = firebase.database();
var GPIO=0;
var ADC =0;
var color = "";
 
 
let dbGPIO = dbRef.ref("ESP32IoTApp/GPIO/");
dbGPIO.on('value', function(snapshot) {
  console.log("El valor del GPIO es", snapshot.val());
  GPIO=snapshot.val();
document.getElementById("GPIO_0_Id").innerHTML  = "GPIO" + " " + "=" + GPIO;
});
 
let dbADC = dbRef.ref("ESP32IoTApp/ADC/");
dbADC.on('value', function(snapshot) {
  console.log("El valor del ADC es", snapshot.val());
  ADC=snapshot.val();
document.getElementById("ADCId").innerHTML  = "ADC" + " " + "=" + ADC;
});
 
let dbLedStatus= dbRef.ref("ESP32IoTApp/Led_Control/estadoLC");
 
$(document).ready(function() {
            // Manejar clic en el botón de encender/apagar
            $("#toggleBtn").click(function(){
                // Obtener el estado actual del botón
                var estadoActual = $(this).text();
 
                // Cambiar el estado del botón
                var nuevoEstado = (estadoActual === "Encendido") ? "Apagado" : "Encendido";
                $(this).text(nuevoEstado);
 
                // Enviar el nuevo estado al servidor o base de datos
                enviarEstado(nuevoEstado);
            });
 
             // Función para enviar el estado al servidor o base de datos
            function enviarEstado(estado) {
                // Puedes hacer una solicitud al servidor aquí o realizar cualquier acción necesaria
                console.log("Nuevo estado enviado: " + estado);
                dbLedStatus.set(estado);
            }
 
        });
 
let dbDAC = dbRef.ref("ESP32IoTApp/DAC/");
 
        document.addEventListener('DOMContentLoaded', function() {
            // Agregar un evento de clic al botón
            document.getElementById('capturarBtnDAC').addEventListener('click', function() {
                // Obtener el valor del campo de entrada
                var numeroCapturado = document.getElementById('InputDAC').value;
 
                // Verificar si se ingresó un número
                if (!isNaN(numeroCapturado)) {
                    // Mostrar el número en la consola
                    console.log("Número capturado: " + numeroCapturado);
                    dbDAC.set(numeroCapturado);
 
                } else {
                    // Mostrar un mensaje si no se ingresó un número válido
                    console.log("Por favor, ingresa un número válido.");
                }
            });
        });
 
 
let dbLedRGB = firebase.database().ref("ESP32IoTApp/LedRGB/color");
 
$(document).ready(function() {
            $("#guardarColor").click(function(){
                // Obtener el valor del botón de radio seleccionado
                var color = $("input[name='gridRadios']:checked").val();
 
                // Hacer algo con el color, como guardarlo en tu base de datos
                console.log("Color seleccionado: " + color);
                // Hacer algo con el color, como guardarlo en tu base de datos
               dbLedRGB.set(color);
            });
        });