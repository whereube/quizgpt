import Question from "./Question";


export default function ShowQuiz(props){
    const questionsJson = JSON.parse(props.data);
    const quizLayout = () => {
    }
    return(
        <div>
            {questionsJson.quiz.map(question => (
                <Question key={question.question} question={question}/>
            ))}
        </div>
    )
}