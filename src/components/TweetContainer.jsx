import Tweet from './Tweet';

const TweetContainer = (props) => {
    const tweetArray = props.tweets.map(tweet => {
        return <Tweet key={tweet.id} tweet={tweet} deleteTweet={props.deleteTweet}/>
    }) 
    return(
        <>
            {tweetArray}
        </>
    )
}

export default TweetContainer;