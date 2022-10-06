//Group Members: Elissa Murphy, Caleb Moretti, Justin Tychek, Aiden Eichenour, Marielle Harrell

import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  //  display state-based text on the screen
  state = { index: 0 };

  const [dialogues, setLocations] = useState([]);

  //fetch the data from the dialogue.json file
  useEffect(() => {
    fetch("data/dialogue.json")
      .then((res) => res.json())
      .then((response) => {
        // console.log(response);
        response.forEach((entry) => {
          entry.active = false;
        });

        setLocations(response);
      });
  });

  //pre render
  const [count, setCount] = useState("Cool Text Box"); //similar to componentdidmount
  // const [number, setNumber] = useState("");
  const dialogueResponse = dialogues.map((person) => (
    <div key={person.id}>
      <div>{person.text}</div>
      <b> {person.name}: </b>
      <button
        className="btn"
        onClick={() => {
          setCount(person.responses[0].resptext);
        }}
      >
        {person.responses[0].resptext}
      </button>
      <button
        className="btn"
        onClick={() => setCount(person.responses[1].resptext)}
      >
        {person.responses[1].resptext}
      </button>
    </div>
  ));

  // console.log(dialogueResponse);
  return (
    <div className="App">
      <h2>Hello, Welcome to the Dialogue Detective :)</h2>
      <div className="coolBox">
        <div>{count}</div>
      </div>

      {dialogueResponse[0]}
      {dialogueResponse[1]}
      {dialogueResponse[2]}
      {/* <button
        id="nextMessage"
        className="btn"
        onClick={() => setCount(dialogueResponse[1])}
      >
        Next Message
      </button> */}
      {/* <button className="btn" onClick={() => setCount(dialogueResponse[1])}>
        {dialogueResponse[1]}
      </button>
      <button className="btn" onClick={() => setCount(dialogueResponse[0])}>
        {dialogueResponse[2]}
      </button> */}

      {dialogueResponse.slice(0, this.state.index).map((v) => {
        return <span>{v}</span>;
      })}
    </div>
  );
}

// [
//   { text: "Hahaha", responses:
//            [ { "text:", "yes", "goto": 10 },
//              { "text:", "no", "goto": 2 } ]
// } ]

// Then you loop through the responses, when they're clicked
//- go to the index in the array associated with the goto.

//This is way more complex then what I expect in dialog detetctive..
//but fun to design :)
