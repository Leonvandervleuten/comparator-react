import React, {useState} from "react";
import '../Uploadxls/uploadxls.css';
import axios from "axios";

const Uploadxls = () => {

    const [selectedFile, setSelectedFile] = useState(null);


    const onFileChange = (event) => {
        // Update the state
        setSelectedFile({selectedFile: event.target.files[0]})
    };

    const onFileUpload = () => {

        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "csv",
            selectedFile.selectedFile,
            selectedFile.selectedFile.name
        );

        // Details of the uploaded file
        console.log(selectedFile);

        // Request made to the backend api
        // Send formData object
        axios.post("http://localhost:8080/compare", formData);
    };

    const fileData = () => {


            if (selectedFile) {

                return (

                    <div>
                        <h2>File Details:</h2>
                        <p>File Name: {selectedFile.selectedFile.name}</p>

                    </div>
                );
            } else {
                return (
                    <div>
                        <br/>
                        <h4>Choose before Pressing the Upload button</h4>
                    </div>
                );
            }
        }
    ;

    console.log(selectedFile);


    return (
        <div>
            <h1>
                GeeksforGeeks
            </h1>
            <h3>
                File Upload using React!
            </h3>
            <div>
                <input type="file" onChange={onFileChange}/>
                <button onClick={onFileUpload}>
                    Upload!
                </button>
            </div>
            {fileData()}
        </div>

    )
}

export default Uploadxls;