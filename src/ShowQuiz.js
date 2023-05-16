import Question from "./Question";


export default function ShowQuiz(props){
    console.log(props);
    const quizLayout = () => {
        let question = props.data[0].question;

    }
    return(
        <div>
            {props.data.map(quiz => (
                <Question key={quiz.question} quiz={quiz} />
            ))}
        </div>
    )
}