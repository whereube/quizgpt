import { useRef } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './CSS/CreateQuiz.css';
//import InputFreeText from './InputFreeText'

export default function CreateQuiz(props){
    const inputRef = useRef();
    const InitiateRequest = () => {
        props.GetRequest(inputRef.current.value);
    }
    return(
        <div>
            <>
            <h1 id="headline">Quiz generator</h1>
          <InputGroup className="mb-3 w-75 inputField mx-auto">
            <InputGroup.Text id="categoryInput">Write category</InputGroup.Text>
            <Form.Control ref={inputRef}
              placeholder="Category"
              aria-label="Category"
              aria-describedby="categoryInput"
            />
            </InputGroup>
        </>
            <div className="text-center quizGenerate">
                <Button className="w-25" onClick={InitiateRequest} variant="light" size="lg">
                    Generate Quiz
                </Button>
            </div>
        </div>
    )
}