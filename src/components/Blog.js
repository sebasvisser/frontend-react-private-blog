import React from 'react';
import {useHistory, useParams}
    from "react-router-dom";
import posts from '../data/posts.json';


export default function Blog(props) {
    console.log("hallo ik ben de blogpagina")
    console.log(posts);
    const { id } = props.match.params;
    const postTitle = posts[id].title;
    const postsBody = posts[id].content;
    return (
        <>
            <h1>{postTitle}</h1>
            <p>{postsBody}</p>
        </>
    );
}
