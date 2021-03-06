import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import pages from '../../api/pages';
import BlogList from './BlogList';
import baseUrl from '../../api/baseUrl';

const EntryContent = ({ pageId, url }) => {

    const fullUrl = `${baseUrl + url}`;
    const [pageCopy, setPageCopy] = useState('');
    const [dataLoaded, setDataLoaded] = useState(false);



    useEffect(() => {
        const getPage = () => {
            pages.get().then((response) => {
                response.data.filter(item => item.link === fullUrl).map((res) => {
                    console.log(res);
                    setPageCopy(res.content.rendered);
                    setDataLoaded(true);
                    return res;
                });
            });
        }
        getPage();
    }, [pageId, fullUrl]);

    const displayPageCopy = () => {
        if (dataLoaded === true) {
            return parse(pageCopy)
        }
        else {
            return <img class="loading" src="/loading.svg" alt="loading" />
        }
    };

    return (
        <div className="ui vertical stripe container entry-content segment">
            <div className="ui container">
                {displayPageCopy()}
                <BlogList pageId={pageId} />
            </div>

        </div>
    )
};

export default EntryContent;