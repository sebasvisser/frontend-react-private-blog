import React from 'react';
import posts from '../data/posts.json';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Blog
    from "./Blog";


export default function Blogposts({isAuthenticated}) {
    const numberOfPosts = posts.length;

    let listBlogposts = []
    for (let i = 0; i < numberOfPosts; i++) {
        let blogLink = "/blog/" + posts[i].id;
        listBlogposts.push(<li><Link to={blogLink} activeClassName="active-link">{posts[i].title}</Link></li>);
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
            <Switch>
                <Route path="/blog/:id">
                    <Blog />
                </Route>
            </Switch>
        </>

    );
}