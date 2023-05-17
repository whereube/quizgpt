
export default function Answer(props){

    return(
        <div>
            <p>{props.answer.answer}: </p>
            <p>{props.answer.is_correct.toString()}</p>
        </div>
    )
}