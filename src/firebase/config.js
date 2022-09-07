import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaFBUn_M0NMOED4jWoUJMJpYGPPkDV2U0",
  authDomain: "devsblog-4a928.firebaseapp.com",
  projectId: "devsblog-4a928",
  storageBucket: "devsblog-4a928.appspot.com",
  messagingSenderId: "278172134504",
  appId: "1:278172134504:web:28acdbbdadebe818b71fdd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};