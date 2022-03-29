
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

const firebaseConfig = {
   apiKey: "AIzaSyDj8Dc7W49B1d0HlVCBpHlL3Xtk9NHBHO4",
   authDomain: "immunitas-contact.firebaseapp.com",
   projectId: "immunitas-contact",
   storageBucket: "immunitas-contact.appspot.com",
   messagingSenderId: "595759133287",
   appId: "1:595759133287:web:6edc811458590bf9181ac2",
   measurementId: "G-LCKMPNT2RC"
  };


  const app = initializeApp(firebaseConfig);

  const database = getDatabase(app);



