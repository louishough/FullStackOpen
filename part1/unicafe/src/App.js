import React, { useState } from 'react';

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Score = ({ type, count }) => {
  return (
    <p>
      {type} {count}
    </p>
  );
};
const Statistics = ({ good, neutral, bad }) => {
  const getStats = (request) => {
    const total = good + neutral + bad;
    const positivePercent = (good / (good + neutral + bad)) * 100;
    const averageScore = good / total;

    return request === 'positive' ? positivePercent : averageScore;
  };

  return (
    <>
      <Title title={'Statistics'} />
      <Score type={'Good'} count={good} />
      <Score type={'Neutral'} count={neutral} />
      <Score type={'Bad'} count={bad} />
      <Score type={'All'} count={good + neutral + bad} />
      <Score type={'Average'} count={getStats('average')} />
      <Score type={'Positive'} count={getStats('positive')} />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <div>
        <Title title={'Give Feedback'} />
        <Button onClick={() => setGood(good + 1)} text={'Good'} />
        <Button onClick={() => setNeutral(neutral + 1)} text={'Neutral'} />
        <Button onClick={() => setBad(bad + 1)} text={'Bad'} />
      </div>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  );
};

export default App;
