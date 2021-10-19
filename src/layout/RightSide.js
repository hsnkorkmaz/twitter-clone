import React from 'react'
import { Timeline } from 'react-twitter-widgets'

import Icon from '../icons/Icon';
const RightSide = () => {

    let searchIcon = <Icon iconName="Logo" className="w-7 h-7" />;

    return (
        <div className="w-80">
            <div className="flex items-center space-x-4 p-3 m-3 bg-gray-200 rounded-full text-twitterGray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-twitterPrimary-base focus-within:text-twitterPrimary-base">
                {searchIcon}
                <input type="text"
                    placeholder="Search Twitter"
                    className="placeholder-twitterGray-dark bg-transparent outline-none w-full text-sm focus:outline-none" />
            </div>
            <div className="mt-5">
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'reactjs'
                    }}
                    options={{
                        height: '90vh'
                    }}
                />
            </div>
        </div>
    )
}

export default RightSide
