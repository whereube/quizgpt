import Question from "./Question";

export default function ShowQuiz(props){
    const questionsJson = JSON.parse(props.data);
    const quizLayout = () => {
    }
    return(
        <>
        {questionsJson.quiz.map(question => (
            <Question key={question.question} question={question}/>
        ))}
        </>
    )
}