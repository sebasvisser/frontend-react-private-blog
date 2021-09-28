import React from 'react';
import posts from '../data/posts.json';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';


export default function Blogposts({isAuthenticated}) {
    const numberOfPosts = posts.length;

    let listBlogposts = []
    for (let i = 0; i < numberOfPosts; i++) {
        listBlogposts.push(<li><Link to={posts[i].id} activeClassName="active-link">{posts[i].title}</Link></li>);
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