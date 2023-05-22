import Answer from "./Answer";
import Card from 'react-bootstrap/Card';
import { useRef, useEffect } from 'react';
import './CSS/Question.css';
import Carousel from 'react-bootstrap/Carousel';


export default function Question(props) {

    const nextQuestion = (e) => {
        e.target.parentElement.classList.remove("question-section");
        e.target.parentElement.classList.add("question-section-2");

        e.target.parentElement.nextSibling.classList.remove("question-section-2");
        e.target.parentElement.nextSibling.classList.add("question-section");
    }

    const previousQuestion = (e) => {
        e.target.parentElement.classList.remove("question-section");
        e.target.parentElement.classList.add("question-section-2");

        e.target.parentElement.previousSibling.classList.remove("question-section-2");
        e.target.parentElement.previousSibling.classList.add("question-section");
    }

    return(
        <>
            {props.index === 0 && 
            <div className="question-section">
                <Card>
                    <Card.Title className="question-title"><h2>{props.question.question}</h2></Card.Title>
                    <Card.Body className="question-body">      
                        {props.question.answers.map(answer => (
                            <Answer className="answers" key={answer.answer} id={props.question.id} answer={answer} SetLiveScoreBoard={props.SetLiveScoreBoard}/>
                        ))}
                    </Card.Body>
                </Card>
                <button onClick={nextQuestion} className="next-btn">Next</button>
            </div>
            }
            {(props.index > 0 && props.index < 3) && 
            <div className="question-section-2">
                <Card>
                    <Card.Title className="question-title"><h2>{props.question.question}</h2></Card.Title>
                    <Card.Body className="question-body">      
                        {props.question.answers.map(answer => (
                            <Answer className="answers" key={answer.answer} id={props.question.id} answer={answer} SetLiveScoreBoard={props.SetLiveScoreBoard}/>
                        ))}
                    </Card.Body>
                </Card>
                <button onClick={previousQuestion} className="next-btn">Previous</button>
                <button onClick={nextQuestion} className="next-btn">Next</button>
            </div>
            }
        </>
        
    )
}