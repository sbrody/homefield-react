import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import pages from '../../api/pages';


const EntryContent = ({ pageId = 13 }) => {

    const [pageCopy, setPageCopy] = useState('');

    const getPage = () => {
        pages.get(`${pageId}`).then((response) => {
            setPageCopy(response.data.content.rendered);
        });
    }

    useEffect(() => {
        getPage();
    }, [pageId]);

    return (
        <div>
            {parse(pageCopy)}
        </div>
    )
};

export default EntryContent;