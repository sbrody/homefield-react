import React, { useState, useEffect } from 'react';
import posts from '../../api/posts';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import baseUrl from '../../api/baseUrl';

const BlogList = ({ pageId, url }) => {

    const [blogListData, setBlogListData] = useState([]);


    const getBlogListData = () => {
        posts.get().then((response) => {
            setBlogListData(response.data);
        })
    };

    const mapData = blogListData.map((item) => {
        return (
            <div className="wp-block-column">
                <Link
                    to={
                        {
                            pathname: `${item.link.replace(baseUrl, '')}`,
                            objectId: item.id,
                            pageType: 'post'
                        }
                    }
                    key={item.id}
                    objectid={item.id}>
                    <h2>{parse(item.title.rendered)}</h2>
                    <p>{parse(item.excerpt.rendered)}</p>
                </Link>
            </div>
        )
    });

    useEffect(() => {
        getBlogListData();
        listOfBlogs();
    }, [])

    const listOfBlogs = () => {
        if (pageId === '32') {
            return mapData;
        }
        else return null;
    }

    return (

        <div className='wp-block-columns'>
            {listOfBlogs()}
        </div>
    )


};

export default BlogList;