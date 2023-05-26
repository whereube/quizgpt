import './CSS/TotalScore.css';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';


export default function ScoreBoard(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const calculatePercentage = () => {
        if (props.totalScore['amount'] === 0) {
            return "0"
        } else {
            let percentage = Math.round(props.totalScore['correct']/props.totalScore['amount'] * 100, 0);
            return percentage
        }
        
    }

    return(
        <div className="showScore">
            <Button className="bottom-right w-10" onClick={handleShow} variant="outline-light" size="lg">
                    Alltime score
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="top">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Total Score</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <p>{calculatePercentage()} %</p>
                    {calculatePercentage() >= 85 && <p>😁</p>}
                    {(calculatePercentage() < 85 && calculatePercentage() > 50) && <p>😐</p>}
                    {(calculatePercentage() <= 50 && calculatePercentage() > 25) && <p>😕</p>}
                    {calculatePercentage() <= 25 && <p>☹️</p>}
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}