/* eslint-disable react/prop-types */
import Total from "./Total";
import Part from "./Part";

const Content = ({ parts }) => {
  const total = parts.reduce((acc, initial) => acc + initial.exercises, 0);
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <Total total={total} />
    </>
  );
};

export default Content;
