// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKB4h93yuIRkW5nIibnZGPBvBWTDRPmx4",
  authDomain: "resume-website-f4f84.firebaseapp.com",
  projectId: "resume-website-f4f84",
  storageBucket: "resume-website-f4f84.appspot.com",
  messagingSenderId: "272396174250",
  appId: "1:272396174250:web:af118328b563aa3d74e1d3",
  measurementId: "G-YEH42HHEVB"
};

// Initialize Firebase
// Using Realtime Database from firebase (from google)
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let terminix = "terminix";
let softdocs = "softdocs";
let capgemini = "capgemini";
let tutoring = "tutoring";

var jobObject = {
    company: "",
    company_logo: "",
    end_month: -1,
    end_year: -1,
    isCurrent: false,
    job_description: "",
    job_title: "",
    start_month: -1,
    start_year: -1
}

function writeJobData(jobObject) {
    const db = getDatabase();
}
