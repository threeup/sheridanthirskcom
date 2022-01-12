
import React, { useState } from 'react';

import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import * as privateFirebase from "./privateFirebase";
firebase.initializeApp(privateFirebase.config);

const auth = firebase.auth();
const firestore = firebase.firestore();


export default function App() {
    // const [user] = useAuthState(auth);
    
    // const [formValue, setFormValue] = useState('');
    // let id = "Sheridan Thirsk";
    // const sendMessage = async (msg) => { 
    //     console.log(msg);
    // }

    // return (
    //   <div className="App">
    //     <header>
    //       <h3>👥💬{id} on 🔥base</h3>
    //     </header>
        
    //     <form className="message" onSubmit={sendMessage}>

    //     <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="hello to you" />

    //     </form>
    //     {user ? <div>u</div> : <div>x</div>}
    //   </div>
    // );
    return <div>ST</div>
  }