import './App.css';
import APIConnect from './APIConnect'
import CreateQuiz from './CreateQuiz'
import ShowQuiz from './ShowQuiz'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactLoading from 'react-loading'
import React, { useState, useEffect } from 'react';

function App() {

  const API_KEY = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);


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
        setLoading(false)
        //questions.json().then(data => setData(data))
        setData([questions])
            
      });

  };
  return (
    <div className="App">
      <CreateQuiz GetRequest={GetRequest}/>
      {loading && <ReactLoading type="spin" color='blue' height={200} width={200}/>}
      {data !== "" && <ShowQuiz data={data}/>}
    </div>
  );
};

export default App;
