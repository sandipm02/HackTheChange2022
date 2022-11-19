// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const connection = initializeApp(
    {
        apiKey: "AIzaSyDXe2KCGZH6XJz3kg2CQCKzxc3QljDk77M",
        authDomain: "cloakd-a2095.firebaseapp.com",
        projectId: "cloakd-a2095",
        storageBucket: "cloakd-a2095.appspot.com",
        messagingSenderId: "145106214933",
        appId: "1:145106214933:web:3511a59dfe1896753b6e1c",
        measurementId: "G-TRVR4EKP6X",
        databaseURL: "https://cloakd-a2095-default-rtdb.firebaseio.com",
        }
);

const analytics = getAnalytics(connection);
const database = getDatabase(connection);
