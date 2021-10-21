import React from 'react'
import Icon from '../Icons/Icon'

const Tweet = ({
    comments,
    content,
    displayName,
    likes,
    profileImg,
    retweets,
    timeStamp,
    userName,
    image

}) => {
    return (
        <div className="flex space-x-3 border-b border-gray-extraLight px-4 py-3 cursor-pointer">
            <img src={profileImg} alt="Profile" className="w-11 h-11 rounded-full" />
            <div className="flex-1">
                <div className="flex items-center text-sm">
                    <h4 className="font-bold">{displayName}</h4>
                    <span className="ml-2 text-gray-dark">{userName}</span>
                    <div className="mx-2 bg-gray-dark h-1 w-1 border rounded-full" />
                    <span className="text-gray-dark">
                        {new Date(timeStamp).toLocaleTimeString()}
                    </span>
                </div>
                <p className="mt-2 text-gray-900 text-sm">{content}</p>
                {image && <img src={image} alt="img" className="my-2 rounded-xl max-h-96" />}
                <ul className="-ml-1 mt-3 flex justify-between max-w-md">
                    <li className="flex items-center  space-x-3 text-gray-dark text-sm group">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-twitterPrimary-light ">
                        <Icon iconName="Reply" className="w-5 h-5 group-hover:text-twitterPrimary-base" />
                        </div>
                        <span className="group-hover:text-twitterPrimary-base">{comments}</span>
                    </li>

                    <li className="flex items-center  space-x-3 text-gray-dark text-sm group">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-green-200 ">
                        <Icon iconName="Retweet" className="w-5 h-5 group-hover:text-green-400" />
                        </div>
                        <span className="group-hover:text-twitterPrimary-base">{retweets}</span>
                    </li>

                    <li className="flex items-center  space-x-3 text-gray-dark text-sm group">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-pink-200 ">
                        <Icon iconName="Like" className="w-5 h-5 group-hover:text-gray-dark" />
                        </div>
                        <span className="group-hover:text-pink-400">{likes}</span>
                    </li>

                    <li className="flex items-center  space-x-3 text-gray-dark text-sm group">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-twitterPrimary-light ">
                        <Icon iconName="Share" className="w-5 h-5 group-hover:text-twitterPrimary-dark" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>






    )
}

export default Tweet
