import Answer from "./Answer";
import Card from 'react-bootstrap/Card';
import { useRef, useEffect } from 'react';
import './Question.css';


export default function Question(props){

    return(
        <div>
            <Card>
                <Card.Title>{props.question.question}</Card.Title>
                <Card.Body>      
                    {props.question.answers.map(answer => (
                        <Answer key={answer.answer} id={props.question.id} answer={answer} SetLiveScoreBoard={props.SetLiveScoreBoard}/>
                    ))}
                </Card.Body>
            </Card>
        </div>
    )
}