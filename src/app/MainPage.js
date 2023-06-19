import React, {useState} from 'react';
import  {initializeApp} from 'firebase/app';
import 'firebase/storage';
import {getStorage, ref, getMetadata, uploadBytes} from "firebase/storage";
import Files from "./files";
import {useStoreState} from "easy-peasy";
import FilesFoto from "./files-foto";

import { getDatabase, set ,onValue} from "firebase/database";

function MainPage(props) {

    const firebaseConfig = useStoreState((state) => state.firebaseConfig);

    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);

    const [inputUser, setInputUser] = useState("");

    // const db = getDatabase();
    // const starCountRef = ref(db, 'posts/' + postId + '/starCount');
    // onValue(starCountRef, (snapshot) => {
    //     const data = snapshot.val();
    //     updateStarCount(postElement, data);
    // });

    function writeUserData(userId, name, email, imageUrl) {




        const db = getDatabase(app);
        // const usersRef = ref(db, 'profile/');

        console.log('db')
        console.log(db)
        console.log('storage')
        console.log(storage)

        const starCountRef = ref(db,'profile/0');
        console.log('star')
        console.log(starCountRef)
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log('data')
            console.log(data)
            // updateStarCount(postElement, data);
        });

        console.log('data: ')
        console.log(starCountRef)

        // set(usersRef, {
        //     alanisawesome: {
        //         date_of_birth: "June 23, 1912",
        //         full_name: "Alan Turing"
        //     },
        //     gracehop: {
        //         date_of_birth: "December 9, 1906",
        //         full_name: "Grace Hopper"
        //     }
        // });



        // const db = getDatabase();
        //
        // console.log(db.app._options.databaseURL)
        // console.log(db.app)
        // set(ref(storage, 'users/1/'), {
        //     username: name,
        //     email: email,
        //     profile_picture: imageUrl
        // }).then(r => {console.log('ddd' + r)}) ;
    }



    const enterData = (value) => {
    setInputUser(value.target.value)}




    // getMetadata(path)
    //     .then((metadata) => {
    //         // Metadata now contains the metadata for 'images/forest.jpg'
    //         console.log(metadata)
    //     })
    //     .catch((error) => {
    //         // Uh-oh, an error occurred!
    //         console.log(error)
    //     });


    return (
        <div>

            <p>pokaż bazę danych:</p>
            <form>
                dfsfdsfsdfsdfdsfds
                <input type="text"
                        name="userEmail"
                        value={inputUser}
                        onChange={(e) => enterData(e)}
                       className="login_input"
                       placeholder="email"
                />
                <button onClick={writeUserData(1,{inputUser}, "aa@aa.aa","dddd")}>zapisz</button>
            </form>




        </div>
    );
}

export default MainPage;