import { useRef } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import './CSS/CreateQuiz.css';


export default function CreateQuiz(props){
    const inputRef = useRef();
    const InitiateRequest = () => {
        {/* Makes an API call */}
        props.updateCategory(inputRef.current.value)
        props.GetRequest(inputRef.current.value)
        hideOrShowSearchDiv();
    }

    const handleKeyDown = (event) => {
        {/* Makes an API call on enter */}
        if (event.key === 'Enter') {
          InitiateRequest();
        }
    };

    const hideOrShowSearchDiv = () => {
        const searchDiv = document.getElementsByClassName("searchDiv")[0];
        searchDiv.classList.add("hide")
    }
    return(
        <div>
            <h1 id="headline"><a id="headline-link" href="/">Quiz GPT</a></h1>
            <div className="searchDiv">
                <>
                <InputGroup className="mb-3 w-75 inputField mx-auto">
                <Form.Control ref={inputRef}
                    placeholder="Write a quiz category..."
                    aria-label="Category"
                    aria-describedby="categoryInput"
                    onKeyDown={handleKeyDown}
                />
                </InputGroup>
            </>
                <div className="text-center quizGenerate">
                    <Button onClick={InitiateRequest} variant="outline-success" size="lg">
                        Generate Quiz
                    </Button>
                </div>
            </div>
        </div>
    )
}

