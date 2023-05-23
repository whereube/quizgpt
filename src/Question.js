import Answer from "./Answer";
import LiveScoreBoard from "./LiveScoreBoard";
import Card from 'react-bootstrap/Card';
import './CSS/Question.css';

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
            {(props.index > 0) && 
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
                {props.index + 1 < props.nrOfQuestions && <button onClick={nextQuestion} className="next-btn">Next</button>}
                {props.index + 1 === props.nrOfQuestions && <button onClick={props.showLiveScoreBoard} className="next-btn">Finish</button>}
            </div>
            }
        </>
        
    )
}