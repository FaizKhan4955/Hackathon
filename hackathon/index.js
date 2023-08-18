 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
 const firebaseConfig = {
   apiKey: "AIzaSyCfTwjneeXFW6g87XiqY6KGT0443VhLKSY",
   authDomain: "hackathon-a8c84.firebaseapp.com",
   projectId: "hackathon-a8c84",
   storageBucket: "hackathon-a8c84.appspot.com",
   messagingSenderId: "759137592075",
   appId: "1:759137592075:web:8e321a83e2c97dfa9df80e",
   measurementId: "G-8DD9QZBD84"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 console.log('app--->',app)