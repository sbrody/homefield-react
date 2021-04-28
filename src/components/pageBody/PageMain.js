import React, { useState, useEffect } from 'react';
import pages from '../../api/pages';
import PageHeader from './PageHeader';
import EntryContent from './EntryContent';


const PageMain = ({ id, pageId }) => {



    return (
        <main>
            <PageHeader pageId={pageId} />
            <EntryContent pageId={pageId} />
        </main>
    )
}

export default PageMain;