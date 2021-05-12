import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import acfOptions from '../api/acfOptions';
import baseUrl from '../api/baseUrl';

const Footer = () => {

    const [footerData, setFooterData] = useState([]);

    const getFooterData = () => {
        acfOptions.get().then(
            (response) =>
                setFooterData(response.data.acf)

        )
    };


    useEffect(() => {
        getFooterData();
    }, [])

    return (
        <footer>
            <div className="ui equal width grid">
                <div className="column item bg-image-block" style={{ backgroundImage: `url(${footerData.image_left})` }}>
                    <p><Link to={`${footerData.link_left.replace(baseUrl, '')}`}>{footerData.text_left}</Link></p>
                </div>
                <div className="column item bg-image-block" style={{ backgroundImage: `url(${footerData.image_right})` }}>
                    <p><Link to={`${footerData.link_right.replace(baseUrl, '')}`}>{footerData.text_right}</Link></p>
                </div>
            </div>
            <div className="ui center aligned container fluid segment lower-footer">
                <span>&copy; {new Date().getFullYear()} Friends of Homefield Park</span>
                <span><Link
                    to={
                        {
                            pathname: `/privacy-policy`,
                            objectId: 3
                        }
                    }
                >Privacy policy</Link></span>
            </div>
        </footer>
    )
}

export default Footer;