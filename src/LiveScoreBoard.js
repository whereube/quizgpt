import { Card } from 'react-bootstrap';


export default function LiveScoreBoard(props){



    return(
        <div className='livescore question-section-2'>
            <Card>
                <Card.Title className="question-title"><h3>Finished!</h3></Card.Title>
                <Card.Body className="question-body-finish">
                    <p>Great work! You got: </p>
                    <p>{props.liveScore['correct']} correct answers, out of {props.liveScore['amount']} questions</p>     
                </Card.Body>
            </Card>
        </div>
    )
}