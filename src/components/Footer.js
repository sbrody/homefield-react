import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import acfOptions from '../api/acfOptions';


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
        console.log(footerData);
    }, [])

    return (
        <footer>
            <div className="ui equal width grid">
                <div className="column item">
                    <img className="fluid" src={footerData.image_left} alt="" />
                    <p>{footerData.text_left}</p>
                </div>
                <div className="column item">
                    <img className="fluid" src={footerData.image_right} alt="" />
                    <p>{footerData.text_right}</p>
                </div>
            </div>
            <div className="ui center aligned container segment">
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