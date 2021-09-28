import React from 'react';

export default function Blogposts() {
    const numberOfPosts = 20;
    const listBlogposts = ["A", "B", "C"];

    return (
        <>
            <h1>Blog overzichtspagina</h1>
            <h2>Aantal blogposts: {numberOfPosts}</h2>
            <ul>{listBlogposts}</ul>
        </>
    );
}