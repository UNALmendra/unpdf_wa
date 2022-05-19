import { useState } from 'react';
import ReactFileReader from 'react-file-reader';
import { getDocumentsUser, uploadDocuments } from './queries/axios';

export default function MyDocs() {

    const basestorageurl = "https://storage.googleapis.com/unpdf_st/"

    const [userDocuments, setUserDocuments] = useState([])
    
    const auxGetDocumentsUser = async () => {
        var user = localStorage.getItem("id") 
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
        
        {userDocuments && userDocuments.map(document => {
            return <li key={document.storage}><a href={basestorageurl+document.storage} target="_">{document.name}.{document.type}</a></li>
        }
        )}
        
    </>);
}