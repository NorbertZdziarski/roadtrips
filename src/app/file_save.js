import React, {useState} from 'react';
import  {initializeApp} from 'firebase/app';
import 'firebase/storage';
import {getStorage, ref, getMetadata, uploadBytes} from "firebase/storage";
import Files from "./files";
import {useStoreState} from "easy-peasy";

function FileSave(props) {
    const firebaseConfig = useStoreState((state) => state.firebaseConfig);

    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);

    const [selectedFile, setSelectedFile] = useState(null);


// Create a storage reference from our storage service
    const storageRef = ref(storage);
    const handleFileChange = (e) => {
        console.log(e.target.files[0])
        handleFileUpload(e.target.files[0]);
    };

    const handleFileUpload = (filename) => {
        let zapis = `${filename.name}`
        const storageRef = ref(storage, zapis);
        uploadBytes(storageRef, filename)
            .then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });

    };



    return (
        <div>

            <p></p>
            Main Page

            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Prześlij plik</button>

            <Files/>

        </div>
    );
}

export default FileSave;