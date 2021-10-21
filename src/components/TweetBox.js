import React from 'react'
import Icon from '../icons/Icon'
import db from '../firebase'
import { v4 as uuidv4 } from 'uuid';

import { doc, setDoc } from "firebase/firestore"; 

const TweetBox = () => {
    const [tweet, setTweet] = React.useState("");

    const sendTweet = async () => {
        if (tweet.length > 0) {
             await setDoc(doc(db, "tweets", uuidv4()), {
                displayName: "Hasan Mustafa",
                userName: "@hasan_nu_",
                content: tweet,
                timeStamp: new Date().toLocaleString(),
                profileImg: "https://pbs.twimg.com/profile_images/1450414029927768066/HPgKL10H_400x400.jpg",
                likes: Math.floor(Math.random() * 1000),
                comments: Math.floor(Math.random() * 500),
                retweets: Math.floor(Math.random() * 350)
              });

            setTweet("");
        }
    }



    return (
        <div className="flext flex-col flex-1 mt-2 px-2">
            <textarea
                className="w-full 
            text-xl 
            placeholder-twitterGray-dark 
            outline-none 
            overflow-hidden 
            resize-none 
            bg-transparent"
                placeholder="What's happening?"
                onChange={e => setTweet(e.target.value)}
                value={tweet} />
            <div className="flex items-center justify-between">
                <div className="flex -ml-3">
                    <div className="flex items-center justify-center w-11 h-11 rounderd-full hover:bg-twitterGray-lightest rounded-full">
                        <Icon iconName="Image" className="w-6 h-6 text-twitterPrimary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounderd-full hover:bg-twitterGray-lightest rounded-full">
                        <Icon iconName="Gif" className="w-6 h-6 text-twitterPrimary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounderd-full hover:bg-twitterGray-lightest rounded-full">
                        <Icon iconName="Poll" className="w-6 h-6 text-twitterPrimary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounderd-full hover:bg-twitterGray-lightest rounded-full">
                        <Icon iconName="Emoji" className="w-6 h-6 text-twitterPrimary-base" />
                    </div>
                    <div className="flex items-center justify-center w-11 h-11 rounderd-full hover:bg-twitterGray-lightest rounded-full">
                        <Icon iconName="Schedule" className="w-6 h-6 text-twitterPrimary-base" />
                    </div>
                </div>
                <button 
                className="bg-twitterPrimary-base 
                text-white 
                rounded-full 
                px-4 
                py-2 
                font-medium"
                onClick={sendTweet}>Tweet</button>
            </div>
        </div >
    )
}

export default TweetBox

