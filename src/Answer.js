import Button from 'react-bootstrap/Button';

export default function Answer(props){
    const checkIfCorrect = e => {
        if(e.target.getAttribute('data-myAttr') === "true"){
            e.target.classList.remove("btn-primary")
            e.target.classList.add("btn-success")
        }
        if(e.target.getAttribute('data-myAttr') === "false"){
            e.target.classList.remove("btn-primary")
            e.target.classList.add("btn-danger")
        }

    }     


    return(
        <div>
            <Button onClick={checkIfCorrect} variant='primary' data-myAttr={props.answer.is_correct}>{props.answer.answer}</Button>
        </div>
    )
}