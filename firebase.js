import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword } from
    "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
    const firebaseConfig = {
        apiKey: "AIzaSyCKaNgkWgyAGLi7_t3ew0HuCaKwQxlyxIY",
        authDomain: "myfirstauthproject-bef25.firebaseapp.com",
        projectId: "myfirstauthproject-bef25",
        storageBucket: "myfirstauthproject-bef25.appspot.com",
        messagingSenderId: "1009133833021",
        appId: "1:1009133833021:web:84fb980028b842d15c1354"
      };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
document.getElementById('registration-form').addEventListener('submit', function (event) {
event.preventDefault();})
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
//felhasználó regisztrációja
createUserWithEmailAndPassword(auth, email, password)
.then(function (userCredential) {
// Sikeres regisztráció
var user = userCredential.user;
console.log('Regisztráció sikeres:', user);
})
.catch(function (error) {
// Hiba történt
var errorCode = error.code;
var errorMessage = error.message;
console.error('Regisztrációs hiba:', errorCode,
errorMessage);
});