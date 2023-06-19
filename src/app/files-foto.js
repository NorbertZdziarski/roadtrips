import React, {useEffect, useState} from 'react';
import { getStorage, ref, list, getDownloadURL} from "firebase/storage";
import {initializeApp} from "firebase/app";
import 'firebase/storage';
import {useStoreState} from "easy-peasy";

function FilesFoto(props) {
    const firebaseConfig = useStoreState((state) => state.firebaseConfig);
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);



    // ------------------------------- pokaż zdjęcie początek
    const [imageUrl, setImageUrl] = useState(null);
    useEffect(() => {
        getDownloadURL(ref(storage, 'loading.jpg'))
        .then((url) => {
            setImageUrl(url);
        })
        .catch((error) => {
            console.error('Wystąpił błąd podczas pobierania URL obrazu:', error);
        });
}, []);
// ------------------------------------------- pokaż zdjęcie koniec


    return (
        <div>
            <p>foto:</p>
            {imageUrl && <img src={imageUrl} alt="Zdjęcie" />}
        </div>
    );
}

export default FilesFoto;