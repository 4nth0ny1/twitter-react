import logo from './logo.svg';
import './App.css';
import React from 'react';
import TweetContainer from './components/TweetContainer';

function App() {

  const tweets = [
    {
      content: "I love coding in react!",
      hashTag: "#coding"
    }, 
    {
      content: "Traveling is so cool.",
      hashTag: "#travel"
    }, 
    {
      content: "Pizza! Pizza!",
      hashTag: "#pizza"
    }, 
    {
      content: "I love coding in C++!",
      hashTag: "#coding"
    }, 

  ]

  return (
    <>
      <h1>Twitter React</h1>
      <TweetContainer tweets={tweets} />
    </>
  );
}

export default App;
