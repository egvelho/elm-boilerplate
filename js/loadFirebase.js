import firebase from "firebase/app";
import "firebase/messaging";
import enableFirebasePushNotifications from "./enableFirebasePushNotifications";

export default async function loadFirebase({
    onMessage = () => undefined,
    onTokenRefresh = () => undefined,
}) {
    const firebaseConfig = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: "",
        messagingSenderId: window.process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    };

    firebase.initializeApp(firebaseConfig);
    enableFirebasePushNotifications(firebase, onMessage, onTokenRefresh);
}
