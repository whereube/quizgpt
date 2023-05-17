import Answer from "./Answer";
import Card from 'react-bootstrap/Card';

export default function Question(props){
    
    return(
        <div>
            <Card>
                <Card.Title>{props.question.question}</Card.Title>
                <Card.Body>      
                    {props.question.answers.map(answer => (
                        <Answer key={answer.answer} answer={answer}/>
                    ))}
                </Card.Body>
            </Card>
        </div>
    )
}