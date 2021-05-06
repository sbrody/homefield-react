import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import navBar from '../api/navBar';
import siteLogo from '../api/siteLogo';
import siteSettings from '../api/siteSettings';
import menuIcon from '../components/images/menuIcon.png';


const Navigation = () => {

    const [navItems, setNavItems] = useState([]);
    const [logo, setLogo] = useState('');
    const [active, setActive] = useState('right menu primary-menu');

    const importNav = () => navBar.get().then(
        response => setNavItems(response.data));

    const returnedNav = navItems.map((item) => {
        return (
            <Link
                // pass in objectId as part of 'to' attribute so it can be passed to router useLocation hook
                to={
                    {
                        pathname: `/${item.url.replace('http://homefield.local/', '')}`,
                        objectId: item.object_id
                    }
                }
                className="item"
                key={item.ID}
                objectid={item.object_id}
                // toggle mobile menu off if page reloads
                onClick={() => setActive(menuClasses)}
            >
                {item.title}
            </Link>
        )
    });



    // call to api placed inside useEffect to prevent infinite loop
    useEffect(() => {
        importNav();
        getSiteLogo();
        setActive(menuClasses);
    }, []);

    // Get the ID of the site logo from site settings and apply it to the list of site media
    const getSiteLogo = () =>
        siteLogo.get(siteSettings.value).then(
            response => setLogo(response.data)
        )

    // transition for mobile menu    

    const menuClasses = "right menu primary-menu";
    const menuClassesActive = "right menu primary-menu active";
    const mobileNavToggle = () => {
        active === menuClasses ? setActive(menuClassesActive) : setActive(menuClasses);
    };




    return (
        <div className="ui menu top navigation borderless stackable">
            <div className="item site-title">
                <Link to="/">
                    <h1 className="visually-hidden">Friends of Homefield Park</h1>
                    <img className="ui image site-logo" src={logo.source_url} alt={logo.alt_text} />
                </Link>
            </div>
            <div className="item right mobile-only menu-toggle">
                <button onClick={mobileNavToggle} className="ui button"><span className="visually-hidden">Menu</span><img src={menuIcon} alt="" width="40px" height="40px" /></button>
            </div>
            <nav className={active}>
                {returnedNav}
            </nav>
        </div>
    )
};

export default Navigation;