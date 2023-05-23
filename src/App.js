import './CSS/App.css';
import CreateQuiz from './CreateQuiz'
import ShowQuiz from './ShowQuiz'
import TotalScore from './TotalScore'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading'
import React, { useState, useEffect } from 'react';
import LiveScoreBoard from './LiveScoreBoard';

function App() {

  let testList = {
    "quiz": [
      {
        "question": "What band holds the record for the most number-one hits on the Billboard Hot 100 chart?",
        "id": "123625323",
        "answers": [
          {
            "answer": "The Beatles",
            "is_correct": true
          },
          {
            "answer": "The Rolling Stones",
            "is_correct": false
          },
          {
            "answer": "Led Zeppelin",
            "is_correct": false
          },
          {
            "answer": "Queen",
            "is_correct": false
          }
        ]
      },
      {
        "question": "Who is the best-selling solo artist of all time?",
        "id": "1241242412",
        "answers": [
          {
            "answer": "Michael Jackson",
            "is_correct": false
          },
          {
            "answer": "Elvis Presley",
            "is_correct": true
          },
          {
            "answer": "Madonna",
            "is_correct": false
          },
          {
            "answer": "Whitney Houston",
            "is_correct": false
          }
        ]
      }
    ]
  }
  

  const API_KEY = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [liveScore, setLiveScore] = useState({
    correct: 0,
    amount: 0,
  });

  
  const [totalScore, setTotalScore] = useState(() => {
    const localData = localStorage.getItem('totalScore');
    return localData ? JSON.parse(localData) : {
      correct: 0,
      amount: 0,
    }
  });

  useEffect(() => {
    localStorage.setItem('totalScore', JSON.stringify(totalScore));
  }, [totalScore]);

  

  const TestRequest = () => {
    setData([JSON.stringify(testList)]); //istället för fetch temporärt
  }
  const GetRequest = (choosenCategory) => {

    setLoading(true)
    const prompt = `Please provide me with a JSON-formatted quiz about ` + choosenCategory + `.
    The quiz should contain 2 questions, and each question should have 3 incorrect answers and one correct answer. 
    Ensure that the incorrect answers are unique and different from the correct answer. 
    Please provide the response in the following format: a JSON object with two different objects for each question: "question," "answers". 
    Each answer should have another key with a bool value that indicates which one is correct and which ones are not correct. 
    The four different keys should be named "question", "answers", "answer" and "is_correct". 
    The main object should be named "quiz". The response should look like this: 
    {
        "quiz": [
          {
            "question": "Example question 1",
            "answers": [
              {
                "answer": "Example answer 1.1",
                "is_correct": false
              },
              {
                "answer": "Example answer 1.2",
                "is_correct": false
              },
              {
                "answer": "Example answer 1.3",
                "is_correct": false
              },
              {
                "answer": "Example answer 1.4",
                "is_correct": true
              }
            ]
          },
          {
            "question": "Example question 2",
            "answers": [
              {
                "answer": "Example answer 2.1",
                "is_correct": false
              },
              {
                "answer": "Example answer 2.2",
                "is_correct": true
              },
              {
                "answer": "Example answer 2.3",
                "is_correct": false
              },
              {
                "answer": "Example answer 2.4",
                "is_correct": false
              }
            ]
          }
        ]
    }`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + API_KEY,
        "cors": "*"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{
          role: "user",
          content: prompt 
          }]
      })
    };

    fetch('https://api.openai.com/v1/chat/completions', options)
      .then(response => response.json())
      .then(response => {
        const questions = response.choices[0].message.content;
        setLoading(false);
        
        setData([questions]);
      });
  };

  const SetLiveScoreBoard = (correct, amount) => {
    let newScore = liveScore['correct'] + correct;
    let newAmount = liveScore['amount'] + amount;

    let newTotalScore = totalScore['correct'] + correct;
    let newTotalAmount = totalScore['amount'] + amount;

    let updatedTotalScore = {
      correct: newTotalScore,
      amount: newTotalAmount,
    }

    setTotalScore(updatedTotalScore);
    
    let updatedScore = {
      correct: newScore,
      amount: newAmount,
    }

    setLiveScore(updatedScore);
  }

  const showLiveScoreBoard = (e) => {
    const liveScore = document.getElementsByClassName("livescore")[0];

    e.target.parentElement.classList.remove("question-section");
    e.target.parentElement.classList.add("question-section-2");

    liveScore.classList.add("question-section");
  }



  return (
    <div className="App">
      <CreateQuiz GetRequest={TestRequest} />
      {loading && <ReactLoading type="spin" color='blue' height={200} width={200} />}
      {data !== "" && <ShowQuiz data={data} SetLiveScoreBoard={SetLiveScoreBoard} showLiveScoreBoard={showLiveScoreBoard}/>}
      <LiveScoreBoard liveScore={liveScore}></LiveScoreBoard>
      <TotalScore totalScore={totalScore} />
    </div>
  );
};

export default App;
