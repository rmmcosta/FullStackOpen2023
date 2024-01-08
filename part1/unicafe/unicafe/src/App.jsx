import { useState } from "react";

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const Feedback = ({ handleGoodClick, handleNewtralClick, handleBadClick }) => {
  return (
    <>
      <h1>Give Feedback</h1>
      <Button text="Good" onClick={handleGoodClick} />
      <Button text="Neutral" onClick={handleNewtralClick} />
      <Button text="Bad" onClick={handleBadClick} />
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => (
  <>
    <h1>Statistics</h1>
    <table>
      <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
      </tbody>
    </table>
  </>
);

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNewtralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <Feedback
        handleGoodClick={handleGoodClick}
        handleNewtralClick={handleNewtralClick}
        handleBadClick={handleBadClick}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
