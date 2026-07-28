import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCi311kZO1FG5FkjenNZVd82qCn9AfN3_Y",
  authDomain: "taskmanager-4df7f.firebaseapp.com",
  projectId: "taskmanager-4df7f",
  storageBucket: "taskmanager-4df7f.firebasestorage.app",
  messagingSenderId: "455744895730",
  appId: "1:455744895730:web:5ac772960ea1f3e9666e6b"
};


const app = initializeApp(firebaseConfig);


export default app;