import React from 'react';
import {useHistory, useParams}
    from "react-router-dom";
import posts from '../data/posts.json';


export default function Blog() {
    const { id } = useParams()
    const postTitle = posts[id].title;
    const postsBody = posts[id].content;
    return (
        <>
            <h1>{postTitle}</h1>
            <p>{postsBody}</p>
        </>
    );
}
