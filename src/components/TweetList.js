import React from 'react'
import Tweet  from './Tweet'

const TweetList = ({tweets}) => {

    return (
        <div>
            {
                tweets.map((tweet, index) => (
                    <Tweet {...tweet} key={index} />
                ))}
            
        </div>
    )
}

export default TweetList
