import './CSS/Question.css';


export default function ScoreBoard(props){



    return(
        <div>
            <p>Antal rätt</p>
            <p>{props.liveScore['correct']} / {props.liveScore['amount']}</p>
        </div>
    )
}