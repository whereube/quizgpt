import React, { useState, useEffect } from 'react';


const API_KEY = process.env.REACT_APP_API_KEY;
export default function GetRequest() {

    const [data, setData] = useState("");

    function test() {
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
                    content: "Hej vem är du?"
                }]
            })
        };

        fetch('https://api.openai.com/v1/chat/completions', options)
            .then(response => response.json())
            
            .then(response => {
                const questions = response.choices[0].message.content;

                questions.json().then(data => setData(data))
                
            });

    };

        
    
    return (
        <div>
            <button onClick={test}>hej</button>
            <p>{ data }</p>
        </div>
    )

}