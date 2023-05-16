import { useRef } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
//import InputFreeText from './InputFreeText'

export default function CreateQuiz(props){
    const inputRef = useRef();
    const InitiateRequest = () =>{
        props.GetRequest(inputRef.current.value);
    }
    return(
        <div>
            <>
          <InputGroup className="mb-3">
            <InputGroup.Text id="categoryInput">Skriv kategori</InputGroup.Text>
            <Form.Control ref={inputRef}
              placeholder="Kategori"
              aria-label="Kategori"
              aria-describedby="categoryInput"
            />
            </InputGroup>
        </>
            <button onClick={InitiateRequest}>Generera Quiz</button>
        </div>
    )
}