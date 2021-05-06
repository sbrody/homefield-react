import React, { useState, useEffect } from 'react';
import acfOptions from '../api/acfOptions';
import socialMenu from '../api/socialMenu';

const UpperNavigation = () => {

    const [newsTickerData, setNewsTickerData] = useState('');
    const [socialMenuItems, setSocialMenuItems] = useState([]);

    const getNewsTicker = () => acfOptions.get().then((response) => {
        setNewsTickerData(response.data.acf);
    });

    const getSocialMenuItems = () => socialMenu.get().then((response) => {
        setSocialMenuItems(response.data);
        console.log(response);
    });

    console.log(socialMenuItems);

    const returnedSocialMenuItems = socialMenuItems.map((item) => {
        return (
            <a className="item" key={item.ID} href={item.url}><i className={`icon ${item.post_name}`}></i><span className="visually-hidden">{item.post_title}</span></a>
        )
    });


    useEffect(() => {
        getNewsTicker();
        getSocialMenuItems();
    }, [])


    return (
        <div className="top-nav inverted ui menu">
            <div className="item ticker"><a href={newsTickerData.news_link}>{newsTickerData.news_text}</a></div>
            <div className="right menu icon">
                {returnedSocialMenuItems}
            </div>
        </div>
    )
};

export default UpperNavigation;
