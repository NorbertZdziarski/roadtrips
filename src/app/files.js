import React, {useEffect, useState} from 'react';
import { getStorage, ref, list, getDownloadURL} from "firebase/storage";
import {initializeApp} from "firebase/app";
// import firebase from 'firebase/app';
import 'firebase/storage';
import {useStoreState} from "easy-peasy";
import { uploadBytes } from "firebase/storage";
function Files(props) {
    const firebaseConfig = useStoreState((state) => state.firebaseConfig);
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);




    const [path, setPath] = useState()
    const [files, setFiles] = useState()
    const [iloscplikow, setiloscplikow] = useState()
    const [pliki, setPliki] = useState()



    const storageRef = ref(storage);

   const uploadFile = (filename) => {

    // const storageRef = ref(storage, filename);

// 'file' comes from the Blob or File API
    uploadBytes(storageRef, filename).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });



   }








    //
    async function pageTokenExample(){
        // Create a reference under which you want to list

        const listRef = ref(storage, '');

        // Fetch the first page of 100.
        const firstPage = await list(listRef, { maxResults: 100 });
        console.log(firstPage.items[0]._location.path_)
        console.log(firstPage.items[0])
        console.log(firstPage.items)
        console.log(firstPage.items.length)
            // setPath(firstPage.items[0]._location.bucket)
            // setFiles(firstPage.items[0]._location.path_)
        setiloscplikow(firstPage.items.length)
        setPliki(firstPage.items)
        // Use the result.
        // processItems(firstPage.items)
        // processPrefixes(firstPage.prefixes)
        // console.log('pliki:')
        // console.log(pliki)
        // Fetch the second page if there are more elements.
        if (firstPage.nextPageToken) {
            const secondPage = await list(listRef, {
                maxResults: 100,
                pageToken: firstPage.nextPageToken,
            });
            // processItems(secondPage.items)
            // processPrefixes(secondPage.prefixes)
        }
    }
    // let sciezka = `${path}/${files}`

    pageTokenExample()


    return (
        <div>
            <p>Hello</p>

            {/*uploadFile*/}
        </div>
    );
}

export default Files;