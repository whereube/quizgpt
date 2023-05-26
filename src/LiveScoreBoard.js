import { Card } from 'react-bootstrap';


export default function LiveScoreBoard(props){

    const reloadPage = () =>{
        window.location.reload(false);
    }

    return(
        <div className='livescore question-section-2'>
            <Card>
                <Card.Title className="question-title"><h3>Finished!</h3></Card.Title>
                <Card.Body className="question-body-finish">
                    <p>Great work! You got: </p>
                    <p>{props.liveScore['correct']} correct answers, out of {props.liveScore['amount']} questions answered</p>
                    <button onClick={reloadPage} className='next-btn'>New quiz</button>
                </Card.Body>
            </Card>
        </div>
    )
}