import { useState } from 'react';
import ReactFileReader from 'react-file-reader';
import { getDocumentsUser, uploadDocuments } from './queries/axios';
import './MyDocs.css';
import { ImageListItem, ImageList } from '@mui/material';

export default function MyDocs() {

    const baseStorageUrl = "https://storage.googleapis.com/unpdf_st/"

    const [userDocuments, setUserDocuments] = useState([])

    const auxGetDocumentsUser = async () => {
        var user = localStorage.getItem("id")
        //var user = "Johan"
        var aux = await getDocumentsUser(user)
        setUserDocuments(aux.documents_user)
    }

    const handleFiles = files => {
        var full_name = files["fileList"][0]["name"];
        var full_type = files["fileList"][0]["type"];
        var name = full_name.substring(0, full_name.lastIndexOf('.'));
        var type = full_type.substring(full_type.lastIndexOf('/') + 1);
        var user = localStorage.getItem("id")

        var base64_data = files["base64"]
        var file = base64_data.substring(base64_data.indexOf(",") + 1)
        uploadDocuments(name, type, user, file);
    }

    return (<>

        <div>
            <h2>Documents</h2>
        </div>

        <ReactFileReader base64={true} handleFiles={handleFiles}>
            <button className='btn'>Upload</button>
        </ReactFileReader>
        <button onClick={auxGetDocumentsUser}>Mostrar documentos del usuario</button>
        <br></br>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
            {userDocuments && userDocuments.map(document => {

                if (document.type === "jpg" || document.type === "jpeg" || document.type === "png")
                    return (<ImageListItem key={document.storage}>

                        <img
                            src={baseStorageUrl + document.storage}
                            alt="test"
                            loading="lazy" />

                    </ImageListItem>)
                return <span>No imagen para el documento {document.name + "." + document.type}</span>   
            }
            )}
        </ImageList>

    </>);
}