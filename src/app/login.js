import React, {useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {  signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";
function Login(props) {

    const provider = new GoogleAuthProvider();
    const firebaseConfig = {
        apiKey: "AIzaSyDoTFHCr8UPjP1_L4JMix6e00vcxdZqCUM",
        authDomain: "roadtrips-c4c42.firebaseapp.com",
        projectId: "roadtrips-c4c42",
        storageBucket: "roadtrips-c4c42.appspot.com",
        messagingSenderId: "135201410130",
        appId: "1:135201410130:web:cf2b27d372119665f5638b"
    };

    const app = initializeApp(firebaseConfig);



    const [inputUser, setInputUser] = useState("");
    const [inputPass, setInputPass] = useState("");
    const [user, setUser] = useState("");



    const enterData = (value) => {
        setInputUser(value.target.value)
    }
    const enterPass = (value) => {
        setInputPass(value.target.value)
    }

    function googleLogin() {


        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // console.log('ZAPIS danych')
                setUser(user.email)
                console.log(user)

                // writeUserData(token, "Ala", "email@aa.pl", "image U R L")
                // console.log("zapisane???")
                // setLoggedUser(user)
                // setLoggedIn(true)
                // setLoggedInLogin(true);

                // ...
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }




    // function checkLogin() {
    //     signInWithEmailAndPassword(auth, newUser, newPassword)
    //         .then((userCredential) => {
    //             const user = userCredential.user;
    //             setLoggedUser(user)
    //             setLoggedIn(true)
    //             setLoggedInLogin(true);
    //
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.log(errorMessage)
    //             console.log(errorCode)
    //
    //
    //         });
    //
    // }

    return (
        <div>
            <form>
                <input type="text"
                        name="userEmail"
                        value={inputUser}
                        onChange={(e) => enterData(e)}
                       className="login_input"
                       placeholder="email"
                />
                <input type="password"
                       name="userPassword"
                       value={inputPass}
                       onChange={(e) => enterPass(e)}
                       className="login_input"
                       placeholder="password"
                />
                <p>{inputUser}</p>
            </form>
            <button onClick={googleLogin}>Google</button>
            <p> użytkownik: {user}</p>
        </div>
    );
}

export default Login;