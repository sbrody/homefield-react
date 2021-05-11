
import PageHeader from './PageHeader';
import EntryContent from './EntryContent';


const PageMain = ({ id, pageId, url }) => {

    console.log(pageId);
    return (
        <main className="ui pushable">
            <PageHeader pageId={pageId} url={url} />
            <EntryContent pageId={pageId} url={url} />
        </main>
    )
}

export default PageMain;