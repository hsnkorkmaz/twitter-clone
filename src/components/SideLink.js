import React from 'react'

const SideLink = ({ name, Icon }) => {
    return (
        <li className="cursor-pointer text-xl group">
            <a href="#">
                <div className="inline-block">
                <div className="flex items-center group-hover:bg-twitterPrimary-light group-hover:text-twitterPrimary-base rounded-full pl-3 pr-8 py-4">
                    {Icon}
                    <span className="ml-4 font-normal ">
                        {name}
                    </span>
                </div>
                </div>
            </a>
        </li>
    )
}

export default SideLink
