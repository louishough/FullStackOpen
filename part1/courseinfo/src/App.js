import React from 'react';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ course, partNumber }) => {
  return (
    <p>
      {course.parts[partNumber - 1].name}{' '}
      {course.parts[partNumber - 1].exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <>
      <Part course={course} partNumber={1} />
      <Part course={course} partNumber={2} />
      <Part course={course} partNumber={3} />
    </>
  );
};

const Total = ({ course }) => {
  let count = 0;
  course.parts.forEach((part) => (count += part.exercises));
  return <p>Total Courses: {count}</p>;
};

export default App;
