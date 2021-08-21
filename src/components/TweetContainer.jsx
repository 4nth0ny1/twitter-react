import Tweet from './Tweet';

const TweetContainer = (props) => {
    const tweetArray = props.tweets.map(tweet => {
        return <Tweet tweet={tweet} />
    }) 
    return(
        <>
            {tweetArray}
        </>
    )
}

export default TweetContainer;