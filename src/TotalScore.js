import './CSS/Question.css';


export default function ScoreBoard(props){

    function calculatePercentage() {
        if (props.totalScore['amount'] === 0) {
            return "0"
        } else {
            let percentage = props.totalScore['correct']/props.totalScore['amount'] * 100;
            return percentage
        }
        
    }

    return(
        <div>
            <p>Total Score</p>
            <p>{calculatePercentage()} %</p>  
        </div>
    )
}