import React, {useEffect, useState} from 'react';
import { getStorage, ref, list, getDownloadURL} from "firebase/storage";
import {initializeApp} from "firebase/app";
// import firebase from 'firebase/app';
import 'firebase/storage';
import {useStoreState} from "easy-peasy";

function FilesShow(props) {
    const firebaseConfig = useStoreState((state) => state.firebaseConfig);
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);

    const storageRef = ref(storage);



    const [path, setPath] = useState()
    const [files, setFiles] = useState()
    const [iloscplikow, setiloscplikow] = useState()
    const [pliki, setPliki] = useState()

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
            {(iloscplikow ? <p>ilość plików: {iloscplikow}</p> : <p>none</p>)}
            {(pliki ? pliki.map((plik) => <p>{plik._location.path_}</p>) : <p></p>)}

        </div>
    );
}

export default FilesShow;