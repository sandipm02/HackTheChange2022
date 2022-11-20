// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
export function initializeDB () {
    const app = initializeApp(
        {
            apiKey: "AIzaSyDXe2KCGZH6XJz3kg2CQCKzxc3QljDk77M",
            authDomain: "cloakd-a2095.firebaseapp.com",
            projectId: "cloakd-a2095",
            storageBucket: "cloakd-a2095.appspot.com",
            messagingSenderId: "145106214933",
            appId: "1:145106214933:web:3511a59dfe1896753b6e1c",
            measurementId: "G-TRVR4EKP6X"
          }
    );
    const analytics = getAnalytics(app);
    return app;
}
