/* eslint-disable react/prop-types */
import { useState } from "react";

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const AnecdotesSummary = ({ anecdotes, votes }) => {
  const mostVotedAnecdoteIndex = votes.indexOf(Math.max(...votes));
  return (
    <>
      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVotedAnecdoteIndex]}
      <br />
      has {votes[mostVotedAnecdoteIndex]} votes
    </>
  );
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleVote = () => {
    const copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  };

  const handleNextAnecdote = () => {
    let nextSelected;
    do {
      nextSelected = generateRandomNumber(0, anecdotes.length);
    } while (nextSelected === selected);
    setSelected(nextSelected);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      has {votes[selected]} votes
      <br />
      <Button onClick={handleVote} text="vote" />
      <Button onClick={handleNextAnecdote} text="next Anecdote" />
      <AnecdotesSummary anecdotes={anecdotes} votes={votes} />
    </div>
  );
};

export default App;
