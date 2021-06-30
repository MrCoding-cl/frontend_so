import React, {useContext,useState,useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import SettingsContext from "../context/Settings/SettingsContext";




const SaveList = () => {
    const {id} = useContext(SettingsContext);
    const [downloadLink, setDownloadLink] = useState('')

    // function for generating file and set download link
    const makeTextFile = async() => {
        try{
            const fetch= await axios.get(`http://localhost:8080/log/${id}`);
            const log=fetch.data["log"]
            const list=log.split('\n')
            const data = new Blob([list.join('\n')], { type: 'text/plain' })
            if (downloadLink !== '') window.URL.revokeObjectURL(downloadLink)

            // update the download link state
            setDownloadLink(window.URL.createObjectURL(data))

        } catch(error){
            Swal.fire({
                title: 'Ocurrio un error',
                text: error,
                icon: 'error',
                confirmButtonText: 'Ta bien'
            })
        }
    }
    // useEffect(() => {
    //     makeTextFile()
    // }, [])

    // Call the function if list changes
    // useEffect(() => {
    //     makeTextFile()
    // }, [])



    return (
        <>
            <div className="buttons">
                <a className="button" download='log.txt' href={downloadLink} onClick={makeTextFile}>Download Log</a>
            </div>
        </>
    )

}

export default SaveList;