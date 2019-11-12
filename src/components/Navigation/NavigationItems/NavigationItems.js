import React from 'react';
import './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
    return (
        <ul className="NavigationItems">
            <NavigationItem to="/pages/home" exact>
                Home
            </NavigationItem>
            <NavigationItem to="/pages/divisions" exact>
                Divisions
            </NavigationItem>
            <NavigationItem to="/pages/about" exact>
                About
            </NavigationItem>
            <NavigationItem to="/pages/contacts" exact>
                Contacts
            </NavigationItem>
        </ul>
    );
};

export default NavigationItems;