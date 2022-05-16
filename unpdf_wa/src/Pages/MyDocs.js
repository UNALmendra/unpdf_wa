import ReactFileReader from 'react-file-reader';

export default function MyDocs() {

    const handleFiles = files => {
        var full_name = files["fileList"][0]["name"];
        var full_type = files["fileList"][0]["type"];
        var name = full_name.substring(0, full_name.lastIndexOf('.'));
        var type  = full_type.substring(full_type.lastIndexOf('/') + 1);
        var user = "?"
        var base64_data = files["base64"]
        var file = base64_data.substring(base64_data.indexOf(",")+1)
        console.log(name,"|", type,"|", user,"|", file);
    }

    return (<>
        <div>
            <h2>My Documents should appear here</h2>
        </div>

        <ReactFileReader base64={true} handleFiles={handleFiles}>
            <button className='btn'>Upload</button>
        </ReactFileReader>
    </>);
}