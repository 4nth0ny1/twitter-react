import { useState } from 'react';

const Tweet = (props) => {

    const [ liked, setLiked ] = useState(false)

    const toggleLiked = () => {
        setLiked(!liked)
    }

    const handleDelete = (e) => {
        props.deleteTweet(props.tweet.id)
    }

    return(
        <>
            <div className="tweet-card">
                <p>{props.tweet.content}</p>
                <p>{props.tweet.hashTag}</p>
                <div className="bottom-tweet-container">
                    {liked ? <button className="like-button" onClick={toggleLiked}>❤️</button> : <button className="like-button" onClick={toggleLiked}>♡</button>} 
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </>
    );
}

export default Tweet;

