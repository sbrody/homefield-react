import React, { useEffect, useState } from 'react';
import pages from '../../api/pages';
import useWindowWidth from '../../hooks/useWindowWidth';
import parse from 'html-react-parser';
import baseUrl from '../../api/baseUrl';

const PageHeader = ({ pageId, url }) => {

    const [pageTitle, setPageTitle] = useState(['']);
    const [headerImageUrl, setHeaderImageUrl] = useState('');
    const [dataLoaded, setDataLoaded] = useState(false);

    const fullUrl = `${baseUrl + url}`;
    console.log(fullUrl);
    // responsive image functionality - can't use custom hook itself within callback
    // debounced resizing function to prevent too many calls to api on screen resize
    const width = useWindowWidth();


    // copy improved paging functionality using url from entrycontent
    const getPage = () => {
        pages.get().then((response) => {
            response.data.filter(item => item.link === fullUrl).map((res) => {
                setPageTitle(res.title.rendered);
                setDataLoaded(true);
                if (res.acf.header_image) {
                    width >= 760 ? setHeaderImageUrl(res.acf.header_image.url) : setHeaderImageUrl(res.acf.header_image.sizes.medium_large)
                };
            })
        });
    };

    useEffect(() => {
        getPage();
    }, [url, width]);

    const displayHeader = () => {
        if (dataLoaded === true) {
            return parse(pageTitle)
        }
        else {
            return 'Loading...'
        }
    };

    return (
        <header className="ui masthead center aligned segment inverted vertical" style={{ backgroundImage: `url(${headerImageUrl})` }}>
            <div className="ui text container">
                <h1 className="ui inverted header huge">{displayHeader()}</h1>
            </div>
        </header>

    )
};

export default PageHeader;