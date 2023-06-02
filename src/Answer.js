import Button from 'react-bootstrap/Button';
import './CSS/Answer.css';


export default function Answer(props){

    const checkIfCorrect = e => {
        {/*Checks if the answer is correct andd sets the livescore and element colors based on it */}
        const questionId =  e.target.getAttribute('data-questionid'); //Gets the questionId to find all other buttons related to the same question
        const idString = "[data-questionid='" + questionId + "']";

        const btns = document.querySelectorAll(idString); // Gets all elements corresponding to the same question as the element that activated the function
        for (let i = 0; i < btns.length; i++) {
            if (btns[i].getAttribute('data-is_correct') === 'true') { //If answer is correct
                btns[i].classList.remove("btn-primary");
                btns[i].classList.add("btn-success");
                btns[i].classList.add("disabled");

            } else { // If answer is incorrect
                btns[i].classList.remove("btn-primary");
                btns[i].classList.add("btn-danger");
                btns[i].classList.add("disabled");
            }
        }

        if (e.target.getAttribute('data-is_correct') === 'true') { //If answer is correct
            //funktion för att hålla koll på poäng
            let correct = 1;
            let amount = 1;
            props.SetLiveScoreBoard(correct, amount);
        } else if (e.target.getAttribute('data-is_correct') === 'false') { //If answer is incorrect
            let correct = 0;
            let amount = 1;
            props.SetLiveScoreBoard(correct, amount);
        }
    } 

    return(
        <div>
            <Button onClick={checkIfCorrect} className="answerbtn" data-questionid={props.id} variant='primary' data-is_correct={props.answer.is_correct}>{props.answer.answer}</Button>
        </div>
    )
}