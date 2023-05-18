import Button from 'react-bootstrap/Button';

export default function Answer(props){

    const checkIfCorrect = e => {
        
            
        const questionId =  e.target.getAttribute('data-questionid');
        const idString = "[data-questionid='" + questionId + "']";

        
        const btns = document.querySelectorAll(idString);
        for (let i = 0; i < btns.length; i++) {
            console.log(btns[i]);
            if (btns[i].getAttribute('data-is_correct') === 'true') {
                btns[i].classList.remove("btn-primary");
                btns[i].classList.add("btn-success");
                btns[i].classList.add("disabled");

            } else {    
                btns[i].classList.remove("btn-primary");
                btns[i].classList.add("btn-danger");
                btns[i].classList.add("disabled");
            }
        }

        if (e.target.getAttribute('data-is_correct') === 'true') {
            //funktion för att hålla koll på poäng
            let correct = 1;
            let amount = 1;
            props.SetLiveScoreBoard(correct, amount);
        } else if (e.target.getAttribute('data-is_correct') === 'false') {
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