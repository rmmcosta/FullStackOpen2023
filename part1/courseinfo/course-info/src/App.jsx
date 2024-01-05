/* eslint-disable react/prop-types */
const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part.partTitle} {props.part.exercisesCount}
    </p>
  );
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.partTitle.replace(' ')} part={part} />
      ))}
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      {props.label + " "}
      {props.parts.reduce((acc, curr) => acc + curr.exercisesCount, 0)}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const parts = [
    { partTitle: part1, exercisesCount: exercises1 },
    { partTitle: part2, exercisesCount: exercises2 },
    { partTitle: part3, exercisesCount: exercises3 },
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