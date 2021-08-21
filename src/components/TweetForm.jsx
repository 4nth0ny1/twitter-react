import React, { Component } from 'react'; 

class TweetForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: "", 
            hashTag: ""
        }
    }

    render() {
        const onChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        } 

        const handleSubmit = (e) => {
            e.preventDefault()
            this.props.addTweet(this.state)
        }

        return(
            <>
                <form onSubmit={handleSubmit}>
                    <div className="form-container">
                        <div className="form-content">
                            <input type="text" placeholder="What's happening?" onChange={onChange} name="content" id="content" />
                        </div>
                        <div className="form-hash">
                            <input type="text" placeholder="hashtag" onChange={onChange} name="hashTag" id="hashTag" />
                        </div>
                        <button className="tweet-button" type="submit">Tweet</button>
                    </div>
                </form>
            </>
        )
    }
}


export default TweetForm;