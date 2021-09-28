import React from 'react';
import posts from '../data/posts.json';


export default function Blogposts({isAuthenticated}) {
    const numberOfPosts = posts.length;

    let listBlogposts = []
    for (let i = 0; i < 5; i++) {
        listBlogposts.push(<li>i</li>);
    }

    console.log(posts);
    return (
        <>
            {isAuthenticated &&
            <>
                <h1>Blog
                    overzichtspagina</h1>
                <h2>Aantal
                    blogposts: {numberOfPosts}</h2>
                <ul>{listBlogposts}</ul>
            </>
            }
        </>

    );
}