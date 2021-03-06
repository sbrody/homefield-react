import React, { useState, useEffect } from 'react';
import posts from '../../api/posts';
import parse from 'html-react-parser';
import media from '../../api/media';
import baseUrl from '../../api/baseUrl';

const BlogPage = ({ pageId, url, pageType = 'post' }) => {

    const [postData, setPostData] = useState([]);
    const [imageData, setImageData] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const fullUrl = `${baseUrl + url}`;
    console.log(fullUrl);


    useEffect(() => {
        const getPostData = () => posts.get().then((response) => {
            console.log(response);
            response.data.filter(item => item.link === fullUrl).map((res) => {
                console.log(res);
                setPostData(res);
                setDataLoaded(true);
                return null;
            });
        });
        getPostData();
    }, [url, fullUrl]);

    useEffect(() => {
        const getImageData = () => {
            if (dataLoaded) {
                media.get(`/${postData.featured_media}`).then((response) => {
                    console.log(response.data);
                    setImageData(response.data);
                    setImageLoaded(true);
                });
            };
        }
        getImageData();
    }, [dataLoaded, postData]);

    const blogHeader = () => {
        if (dataLoaded) {
            return <h1>{parse(postData.title.rendered)}</h1>
        }
        else {
            return (
                <img className="loading" src="/loading.svg" alt="loading" />
            )
        }
    }

    const blogImage = () => {
        if (imageLoaded) {
            return <img src={imageData.media_details.sizes.full.source_url} alt={imageData.alt_text}></img>
        }
        else {
            return <img className="loading" src="/loading.svg" alt="loading" />;
        }
    }

    const blogContent = () => {
        if (dataLoaded) {
            return <div>{parse(postData.content.rendered)}</div>
        }
        else {
            return <img class="loading" src="/loading.svg" alt="loading" />;
        }
    }


    return (
        <main className="ui main text container blog">
            {blogHeader()}
            {blogImage()}
            {blogContent()}
        </main>
    )


};

export default BlogPage;