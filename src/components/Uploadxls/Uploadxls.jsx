import React, {useState} from "react";
import '../Uploadxls/uploadxls.css';
import axios from "axios";

const Uploadxls = () => {

    const [selectedFile, setSelectedFile] = useState([]);


    const onFileChange = (event) => {

        const files = event.target.files;

        for (let i = 0; i < files.length; i++) {
            setSelectedFile(selectedFile => [...selectedFile, {selectedFile: event.target.files[i]}])
        }

    };

    const onFileUpload = () => {
        for (let i = 0; i < selectedFile.length; i++){
            const formData = new FormData();

            const file = selectedFile[i];

            formData.append(
                "csv",
                file.selectedFile,
                file.selectedFile.name
            )

            console.log(file);

            axios.post("http://localhost:8080/compare", formData)
        }

        //
        // // Create an object of formData
        // const formData = new FormData();
        //
        // // Update the formData object
        // formData.append(
        //     "csv",
        //     selectedFile.selectedFile,
        //     selectedFile.selectedFile.name
        // );
        //
        // // Details of the uploaded file
        // console.log(selectedFile);
        //
        // // Request made to the backend api
        // // Send formData object
        // axios.post("http://localhost:8080/compare", formData);
    };

    const fileData = () => {
        if (selectedFile) {

            return (
                <div>
                    <div>
                        <h4>Files:</h4>
                    </div>

                    <div>
                        {selectedFile
                            .map((item) => {
                                return (
                                    <div>{item.selectedFile.name}</div>
                                )
                            })}
                    </div>
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
    };

    console.log(selectedFile)

    return (
        <div className={"xls-container"}>
            <h3>
                Upload file
            </h3>
            <label className={"file-upload"}>
                <input
                    type="file" multiple={true} onChange={onFileChange}/>
                Browse
            </label>
            {fileData()}
            <button onClick={onFileUpload}>
                Upload!
            </button>
        </div>
    )
}

export default Uploadxls;