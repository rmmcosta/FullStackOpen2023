/* eslint-disable react/prop-types */
import { useState } from "react";

const roundWith1Decimal = (number) => Math.round(number * 10) / 10;

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>;

const Feedback = ({ handleGoodClick, handleNewtralClick, handleBadClick }) => (
  <>
    <h1>Give Feedback</h1>
    <Button text="Good" onClick={handleGoodClick} />
    <Button text="Neutral" onClick={handleNewtralClick} />
    <Button text="Bad" onClick={handleBadClick} />
  </>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticsSummary
            total={total}
            average={average}
            positive={positive}
          />
        </tbody>
      </table>
    </>
  );
};

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const StatisticsSummary = ({ total, average, positive }) => {
  if (total === 0) {
    return (
      <tr>
        <td>No feedback given</td>
      </tr>
    );
  }
  return (
    <>
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={roundWith1Decimal(average)} />
      <StatisticLine text="positive" value={roundWith1Decimal(positive) + "%"} />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNewtralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <>
      <Feedback
        handleGoodClick={handleGoodClick}
        handleNewtralClick={handleNewtralClick}
        handleBadClick={handleBadClick}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
