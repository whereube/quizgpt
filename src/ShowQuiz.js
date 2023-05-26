import Question from "./Question";

export default function ShowQuiz(props){
    const questionsJson = JSON.parse(props.data);

    const nrOfQuestions = questionsJson.quiz.length; //Get number of questions in the quiz to know when the user has finished the quiz

    return(
        <>
        {questionsJson.quiz.map((question, i) => (
            <Question key={question.question} question={question} SetLiveScoreBoard={props.SetLiveScoreBoard} index={i} nrOfQuestions={nrOfQuestions} showLiveScoreBoard={props.showLiveScoreBoard}/>
        ))}
        </>
    )
}