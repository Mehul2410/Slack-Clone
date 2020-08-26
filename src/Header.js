import React from 'react'
import './Header.css';
import Avatar from '@material-ui/core/Avatar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';
import { useStateValue } from './Stateprovider';

const Header = () => {
    const [{ user }] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
            <Avatar 
                className = "header__avatar"
                alt={user?.displayName}
                src={user?.photoURL}
            />
            <AccessTimeIcon />
            {/*left header  
            avatar
            timer*/}</div>
            <div className="header__search">
            <SearchIcon />
            <input placeholder="search"></input>
            </div>
            <div className="header__right">
                <HelpIcon />
            {/*right header 
            help icon */ }
            </div>
        </div>
    )
}

export default Header
