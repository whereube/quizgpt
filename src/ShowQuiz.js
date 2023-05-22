import Question from "./Question";

export default function ShowQuiz(props){
    const questionsJson = JSON.parse(props.data);


    return(
        <>
        {questionsJson.quiz.map((question, i) => (
            <Question key={question.question} question={question} SetLiveScoreBoard={props.SetLiveScoreBoard} index={i}/>
        ))}
        </>
    )
}