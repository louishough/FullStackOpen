import React from 'react';

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;
  let total = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        exercises1={exercises1}
        exercises2={exercises2}
        exercises3={exercises3}
      />
      <Total total={total} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Total = ({ total }) => {
  return <p>Number of exercises {total}</p>;
};

const Part = ({ title, count }) => {
  return (
    <p>
      {title} {count}
    </p>
  );
};

const Content = ({
  part1,
  part2,
  part3,
  exercises1,
  exercises2,
  exercises3
}) => {
  return (
    <>
      <Part title={part1} count={exercises1} />
      <Part title={part2} count={exercises2} />
      <Part title={part3} count={exercises3} />
    </>
  );
};

export default App;
