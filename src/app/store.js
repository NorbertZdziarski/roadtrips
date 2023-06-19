import {createStore} from "easy-peasy";

const store = createStore({
    firebaseConfig: {
        apiKey: "AIzaSyDoTFHCr8UPjP1_L4JMix6e00vcxdZqCUM",
        authDomain: "roadtrips-c4c42.firebaseapp.com",
        databaseURL: "https://roadtrips-c4c42-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "roadtrips-c4c42",
        storageBucket: "roadtrips-c4c42.appspot.com",
        messagingSenderId: "135201410130",
        appId: "1:135201410130:web:cf2b27d372119665f5638b"
    },
    userName: "",
    userId: ","
})
export default store;