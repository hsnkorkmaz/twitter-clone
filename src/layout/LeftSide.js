import React, { useState } from 'react'
import SideLink from '../components/SideLink';
import UserBox from '../components/UserBox';
import Icon from '../icons/Icon';

let iconClassName = "w-6 h-6";

    const sideLinks = [
        {
            Name: "Home",
            Icon: <Icon iconName="Home" className={iconClassName} />
        },
        {
            Name: "Explore",
            Icon: <Icon iconName="Explore" className={iconClassName} />
        },
        {
            Name: "Notifications",
            Icon: <Icon iconName="Notifications" className={iconClassName} />
        },
        {
            Name: "Messages",
            Icon: <Icon iconName="Messages" className={iconClassName} />
        },
        {
            Name: "Bookmarks",
            Icon: <Icon iconName="Bookmarks" className={iconClassName} />
        },
        {
            Name: "Lists",
            Icon: <Icon iconName="Lists" className={iconClassName} />
        },
        {
            Name: "Profile",
            Icon: <Icon iconName="Profile" className={iconClassName} />
        },
        {
            Name: "More",
            Icon: <Icon iconName="More" className={iconClassName} />
        }
    ];


const LeftSide = () => {
    const [active, setActive] = useState("Home");
    
    const handleMenuItemClick = (name) => {
        setActive(name);
    }

    return (
        <div className=" flex flex-col justify-between w-72 px-2">
            <div>
                <div className="mt-1 mb-4 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-twitterGray-lightest  transform transition-colors duration-300">
                    <Icon iconName="Logo" className="w-7 h-7 fill-current text-twitterPrimary-base" />

                </div>
                <nav className="mb-4">
                    <ul>
                        {
                            sideLinks.map(
                                ({ Name, Icon }) => (
                                    <SideLink name={Name} Icon={Icon} active={active} onMenuItemClick={handleMenuItemClick} />
                                )
                            )
                        }
                    </ul>
                </nav>
                <button className="bg-twitterPrimary-base hover:bg-twitterPrimary-dark text-white rounded-full py-3 px-8 w-11/12 shadow-lg transform transition-colors duration-300">
                    Tweet
                </button>

            </div>
            <div>
                <UserBox />
            </div>
        </div>
    )
}

export default LeftSide