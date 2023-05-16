import './App.css';
import APIConnect from './APIConnect'
import CreateQuiz from './CreateQuiz'
import ShowQuiz from './ShowQuiz'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';

function App() {

  const API_KEY = process.env.REACT_APP_API_KEY;
  const [data, setData] = useState("");


  const GetRequest = (choosenCategory) => {
    const prompt = `Please provide me with a JSON-formatted quiz about ` + choosenCategory + `.
    The quiz should contain 1 questions, and each question should have 3 incorrect answers and one correct answer.
    Ensure that the incorrect answers are unique and different from the correct answer.
    Please provide the response in the following format: a JSON object with two different objects for each question: "question," "answers".
    Each answer should have another key with a bool value which indicates which one is correct and which ones are not`;
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

        //questions.json().then(data => setData(data))
        setData([questions])
            
      });

  };
  if (data !== "") {
    return (
      <div className="App">
        <CreateQuiz GetRequest={GetRequest}/>
        <ShowQuiz data={data}/>
      </div>
    );
  } else {
    return (
      <div className="App">
        <CreateQuiz GetRequest={GetRequest}/>
      </div>
    );
  }
};

export default App;
