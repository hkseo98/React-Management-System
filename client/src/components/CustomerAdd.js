import { useRef, useState } from 'react';
import { post } from 'axios';
import '../App.css';

export default function CustomerAdd(props) {
    let [file, setFile] = useState(null)
    let [fileName, setFileName] = useState('')


    const form = useRef();
    
    const submit = () => {
        if (!(
            file &&
            form.current.childNodes[7].value &&
            form.current.childNodes[11].value &&
            form.current.childNodes[15].value &&
            form.current.childNodes[19].value
            ))
         {
            alert("there is empty space");
            return;
        }


        const url = 'http://localhost:5000/api/customers';
        const formData = new FormData();
        formData.append('id', props.cus.length+1)
        formData.append('image', file)
        formData.append('name', form.current.childNodes[7].value)
        formData.append('birth', form.current.childNodes[11].value)
        formData.append('sex', form.current.childNodes[15].value)
        formData.append('job', form.current.childNodes[19].value)
        const config = {
            headers: {
                'content-type': 'multipart/form-data' // 파일 형식도 섞여 있을 때
            }
        }
        setFile(null)
        setFileName("")
        form.current.childNodes[3].value = form.current.childNodes[7].value = form.current.childNodes[11].value = form.current.childNodes[15].value = form.current.childNodes[19].value = ""
        post(url, formData, config);
    };

    const handleChange = (e) => {
        setFile(e.target.files[0])
        setFileName(e.target.value)
    }

    return(
        <div className="newPost" ref={form}>
            <h1>고객 추가</h1>
            프로필 이미지:<br/><input type="file" className="from" file={file} value={fileName} onChange={handleChange}></input><br/>
            이름:<br/><input type="text" className="form"></input><br/>
            생년월일:<br/><input type="text" className="form"></input><br/>
            성별:<br/><input type="text" className="form"></input><br/>
            직업:<br/><input type="text" className="form"></input><br/>
            <button type="submit" onClick={submit}>추가하기</button>
        </div>
    )
}