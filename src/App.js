import logo from './logo.svg';
import './App.css';
import React from 'react';
import TweetContainer from './components/TweetContainer';
import Search from './components/Search';
import { useState } from 'react';
import TweetForm from './components/TweetForm'

function App() {

  const [ tweets, setTweets ] = useState([
    {
      id: 1,
      content: "I love coding in react!",
      hashTag: "#coding"
    }, 
    {
      id: 2,
      content: "Traveling is so cool.",
      hashTag: "#travel"
    }, 
    {
      id: 3,
      content: "Pizza! Pizza!",
      hashTag: "#pizza"
    }, 
    {
      id: 4,
      content: "I love coding in C++!",
      hashTag: "#coding"
    }, 

  ])

  const filterTweets = (searchTerm) => {
    const filteredTweets = tweets.filter(tweet => {
      return tweet.hashTag.includes(searchTerm)
    }) 
    setTweets(filteredTweets)
  }

  const deleteTweet = (tweetId) => {
    const filteredTweets = tweets.filter(tweet => {
      return tweet.id !== tweetId
    })
    setTweets(filteredTweets)
  }

  const addTweet = (tweet) => {
    const newTweets = [...tweets, tweet]
    setTweets(newTweets)
  }

  return (
    <>
      <div className="tweet-container">
        <h1 className="page-title">Home</h1>
        <Search filterTweets={filterTweets} />
        <TweetForm addTweet={addTweet} />
        <TweetContainer tweets={tweets} deleteTweet={deleteTweet}/>
      </div>
    </>
  );
}

export default App;
