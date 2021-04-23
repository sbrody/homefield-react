import React, { useState, useEffect } from 'react';
import navBar from '../api/navBar';



const Navigation = () => {

    const [navItems, setNavItems] = useState([]);

    const importNav = () => navBar.get().then(
        response => setNavItems(response.data));

    const returnedNav = navItems.map((item) => {
        return <a href={item.url} className="item">{item.title}</a>
    })

    // call to api placed inside useEffect to prevent infinite loop
    useEffect(() => {
        importNav()
    }, [])

    return (
        <div className="ui menu">
            <div className="item">
                <h1>Friends of Homefield Park</h1>
            </div>
            <div className="right menu">
                {returnedNav}
            </div>

        </div>
    )
};

export default Navigation;