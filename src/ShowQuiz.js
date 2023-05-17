import Question from "./Question";
import Card from 'react-bootstrap/Card';


export default function ShowQuiz(props){
    const questionsJson = JSON.parse(props.data);
    const quizLayout = () => {
    }
    return(
        <>
        {questionsJson.quiz.map(question => (
            <Card>
                <Card.Title>Fråga</Card.Title>
                <Card.Body>
                    <Question key={question.question} question={question}/>
                </Card.Body>
            </Card>
        ))}
        </>
    )
}