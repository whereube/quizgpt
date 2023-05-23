import { Card } from 'react-bootstrap';


export default function LiveScoreBoard(props){



    return(
        <div className='livescore hide'>
            <Card>
                <Card.Title>Finished!</Card.Title>
                <Card.Body>
                    <p>Great work! You got: </p>
                    <p>{props.liveScore['correct']} correct answers, out of {props.liveScore['amount']} questions</p>     
                </Card.Body>
            </Card>
        </div>
    )
}