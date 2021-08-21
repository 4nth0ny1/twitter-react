
const Tweet = (props) => {

    return(
        <>
            <p>{props.tweet.content}</p>
            <p>{props.tweet.hashTag}</p>
        </>
    );
}

export default Tweet;