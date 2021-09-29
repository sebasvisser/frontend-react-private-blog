import React from 'react';
import {useParams}
    from "react-router-dom";
import posts from '../data/posts.json';


export default function Blog() {
    const { id } = useParams();
    return (
        <>
            <h1>{posts[id].title}</h1>
            <p>{posts[id].content}</p>
        </>
    );
}
