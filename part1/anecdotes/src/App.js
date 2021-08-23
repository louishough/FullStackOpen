import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [topQuote, setTopQuote] = useState(null);

  const randomNumber = () => Math.floor(Math.random() * anecdotes.length);
  const updateTopQuote = () => setTopQuote(points.indexOf(Math.max(...points)));
  const addPoint = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
    updateTopQuote();
  };
  console.log(selected, points);
  return (
    <>
      <div>
        <h1>Anecdote of the Day</h1>
        <p>{anecdotes[selected]}</p>
        <p>Votes: {points[selected]}</p>
      </div>
      <br />
      <div>
        <Button
          onClick={() => setSelected(randomNumber())}
          text={'Next Anecdote'}
        />
        <Button onClick={() => addPoint()} text={'Up-Vote'} />
      </div>
      <br />
      <div>
        <h1>Anecdote with the Most Upvotes</h1>
        <p>{anecdotes[topQuote]}</p>
      </div>
    </>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

export default App;
