import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import TweetBox from '../components/TweetBox'
import TweetList from '../components/TweetList'
import db from '../firebase'
import Icon from '../Icons/Icon'

const Feed = () => {
    const [tweets, setTweets] = useState([]);

    const getTweets = async () => {
        const q = query(collection(db, "tweets"), orderBy("timeStamp", "desc"));
        const tweetsSnapshot = await getDocs(q);
        setTweets(tweetsSnapshot.docs.map(doc => doc.data()));
    }

    useEffect(() => {
        getTweets();
    }, []);

    return (
        <main className="flex-1 flex flex-col border-r border-l border-twitterGray-extraLight">
            <header className="bg-white sticky top-0 z-10 flex justify-between items-center p-4 border-b border-twitterGray-extraLight">
                <span className="font-bold text-xl text-gray-900">Home</span>
                <Icon iconName="TopTweets" className="w-6 h-6 text-twitterPrimary-base" />

            </header>
            <div className="flex space-x-4 px-4 py-3">
                <img
                    src="https://pbs.twimg.com/profile_images/1450414029927768066/HPgKL10H_400x400.jpg"
                    alt="Profile"
                    className="w-11 h-11 rounded-full"></img>
                <TweetBox updateMethod={getTweets} />
            </div>
            <div className="h-3 bg-twitterGray-lightest border-t border-b border-twitterGray-light" />
            <div>
                <TweetList tweets={tweets} />
            </div>
        </main>
    )
}

export default Feed
