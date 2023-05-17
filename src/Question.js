import Answer from "./Answer";

export default function Question(props){

    
    return(
        <div>
            <h1>{props.question.question} : </h1>
            {props.question.answers.map(answer => (
                <Answer key={answer.answer} answer={answer}/>
            ))}
        </div>
    )
}