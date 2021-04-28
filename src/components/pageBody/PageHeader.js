import React, { useEffect, useState } from 'react';
import pages from '../../api/pages';


const PageHeader = ({ pageId = 13 }) => {

    console.log(pageId);

    const [pageTitle, setPageTitle] = useState(['']);
    const [headerImageUrl, setHeaderImageUrl] = useState('');


    const getPage = () => {
        pages.get(`${pageId}`).then((response) => {
            console.log(response.data.title.rendered);
            setPageTitle(response.data.title.rendered.replace('&#8217;', "'"));
            if (response.data.acf.header_image) {
                setHeaderImageUrl(response.data.acf.header_image.url);
            };

        })
    }

    useEffect(() => {
        getPage();
    }, [pageId]);


    return (
        <header>
            <h1>{pageTitle}</h1>
            <img src={headerImageUrl} alt="" />

        </header>

    )
};

export default PageHeader;