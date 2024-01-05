/* eslint-disable react/prop-types */
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

const App = () => {
  const course = "Half Stack application development";
  const parts = [
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
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total label="Number of exercises" parts={parts} />
    </div>
  );
};

export default App;
