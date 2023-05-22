import './Question.css';
import { Card } from 'react-bootstrap';


export default function ScoreBoard(props){



    return(
        <div>
            <Card>
                <Card.Title>Finish!</Card.Title>
                <Card.Body>
                    <p>Great work! You got: </p>
                    <p>{props.liveScore['correct']} correct answers, out of {props.liveScore['amount']}</p>     
                </Card.Body>
            </Card>
        </div>
    )
}