import React from 'react'

const SideLink = ({ name, Icon, active, onMenuItemClick }) => {
    const isActive = active === name;

    return (
        <li className="cursor-pointer text-xl group" onClick={() => onMenuItemClick(name)}>
            <a href={name.toLowerCase()} className="pointer-events-none">
                <div className="inline-block">
                    <div className={`flex items-center group-hover:bg-twitterPrimary-light group-hover:text-twitterPrimary-base rounded-full pl-3 pr-8 py-4
                    ${isActive ? 'text-twitterPrimary-base italic' : ''}`}>
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
