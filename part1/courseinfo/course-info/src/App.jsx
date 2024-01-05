/* eslint-disable react/prop-types */

import { useState } from "react";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.name.replace(" ")} part={part} />
      ))}
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      {props.label + " "}
      {props.parts.reduce((acc, curr) => acc + curr.exercises, 0)}
    </p>
  );
};

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Display = ({ counter }) => <div>Counter: {counter}</div>;

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="+" />
      <Button onClick={decreaseByOne} text="-" />
      <Button onClick={setToZero} text="0" />
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total label="Number of exercises" parts={course.parts} />
      <Counter />
    </>
  );
};

export default App;
